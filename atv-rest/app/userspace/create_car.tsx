import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";

export default function CreateCar() {
  const router = useRouter();
  const { token } = useTokenContext();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [hp, setHp] = useState("");

  const handleCreate = async () => {
    const data = {
      model,
      brand,
      hp: parseInt(hp),
      availability: 'available'
    };

    // na outra pagina fizemos com Promise.then, aqui com async/await
    const createdCar = await api.post<Car>(
      "/api/collections/cars/records",
      data,
      {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      }
    );

    if (createdCar.status === 200) {
      Alert.alert("Created!", createdCar.data.model);
      router.replace("/userspace");
    } else {
      console.log(createdCar);
      Alert.alert("Error!", "Error Creating Car!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars API CREATE</Text>

      <TextInput style={styles.rows} value={brand} onChangeText={setBrand} placeholder="brand" />
      <TextInput style={styles.rows} value={model} onChangeText={setModel} placeholder="model" />
      <TextInput
         style={styles.rows}
        value={hp}
        onChangeText={(text) => setHp(text.replace(/[^0-9]/g, ""))}
        placeholder="hp"
        keyboardType="number-pad"
      />

      <Button title="Create Car" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 16 },
  rows: {
    fontSize: 18,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomColor: 'd9d9d9',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
    width: '80%',
    marginBottom: 16
    // margin: 'auto'
  }
});
