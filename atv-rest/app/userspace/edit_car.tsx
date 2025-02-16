import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import api from '../../src/services/api';
import { useTokenContext } from '../../src/contexts/userContext';
import { Picker } from '@react-native-picker/picker';

export default function edit_car() {

  const urlParams = useLocalSearchParams();
  const carId = urlParams.id;

  const { token } = useTokenContext();

  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");
  const [availability, setAvailability] = useState("");

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await api.get(
          `/api/collections/cars/records/${carId}`, {
          headers: {
            Authorization: token,
          },
        });

        setCarDetails(response.data);
        setBrand(String(response.data.brand));
        setModel(String(response.data.model));
        setHp(String(response.data.hp));
        setAvailability(String(response.data.availability))
      } catch (err) {
        setError(err.message || 'Failed to fetch car details');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, []);

  const modifyCar = async () => {
    try {
      await api.patch(
        `/api/collections/cars/records/${carId}`,
        {
          model: model,
          brand: brand,
          hp: hp,
          availability: availability
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("Car details updated!");
      router.back();
    } catch (err) {
      setError(err.message || 'Failed to fetch car details');
    }
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!carDetails) {
    return <Text>No car details available</Text>;
  }

  return (
    <View>
      <View>
        <Text style={styles.title}>Cars API Update</Text>
  
        <TextInput style={styles.rows} value={brand} onChangeText={setBrand} placeholder="brand" />
        <TextInput style={styles.rows} value={model} onChangeText={setModel} placeholder="model" />
        <TextInput
           style={styles.rows}
          value={hp}
          onChangeText={(text) => setHp(text.replace(/[^0-9]/g, ""))}
          placeholder="hp"
          keyboardType="number-pad"
        />
        <Picker
        style={styles.picker}
          selectedValue={availability}
          onValueChange={(itemValue) => setAvailability(itemValue)}
        >
          <Picker.Item key={0} label={'Available'} value={'available'} />
          <Picker.Item key={1} label={'Reserved'} value={'reserved'} />
          <Picker.Item key={2} label={'Sold'} value={'sold'} />
        </Picker>
  
        <Button title="Modify Car" onPress={modifyCar}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    margin: 'auto'
  },
  rows: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomColor: 'd9d9d9',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center'
  },
  picker: {
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
    width: '80%',
    margin: 'auto'
  }
});