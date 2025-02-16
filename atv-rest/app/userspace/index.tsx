import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { QueryParams } from "expo-linking";
import { useFilterQuery } from "../../utils/filterQuery";

export default function Home() {
  const { token } = useTokenContext();
  const [cars, setCars] = useState<Car[]>([]);
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const { filterQuery } = useFilterQuery();

  const [filter, setFilter] = useState<QueryParams>({});
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const [showSold, setShowSold] = useState(false);

  const [buttonColor, setButtonColor] = useState("blue");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    flatlist: {
      padding: 16,
      width: "100%",
      flex: 1,
    },
    title: { fontSize: 16, fontWeight: "bold", marginBottom: 16 },
    item: {
      flexDirection: "column",
      marginTop: 8,
      marginBottom: 16,
    },
    carRowHead: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: "row",
      width: '100%'
    },
    carRowHeadButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: "row",
      gap: 40
    },
    listRow: {
      fontSize: 18,
      paddingBottom: 4,
      paddingTop: 4,
      borderBottomColor: 'd9d9d9',
      borderBottomWidth: 1,
      borderStyle: 'dashed'
    },
    button: {
      padding: 8,
      backgroundColor: "blue",
      borderRadius: 5,
      alignItems: "center",
    },
    switchButton: {
      padding: 8,
      backgroundColor: buttonColor,
      borderRadius: 5,
      alignItems: "center",
    },
    filters: {
      width: "90%",
      marginTop: 8,
    },
    selectFilter: {
      width: "auto",
    },
    filterButtons: {
      flexDirection: "row",
      gap: 8,
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 16,
      borderBottomColor: 'd9d9d9',
      borderBottomWidth: 1,
      paddingBottom: 16
    },
    picker: {
      borderWidth: 1,
      borderColor: 'grey',
      borderStyle: 'solid',
      backgroundColor: '#d9d9d9',
      borderRadius: 5
    }
  });

  useEffect(() => {
    api
      .get("/api/collections/cars/records", {
        headers: { Authorization: token },
      })
      .then((response) => {
        setCars(response.data.items);
        const brands: Set<string> = new Set(response.data.items.map((car) => car.brand));
        setCarBrands([...brands]);
      })
      .catch((error) => Alert.alert(error.message));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/api/collections/cars/records/${id}`, {
        headers: { Authorization: token },
      });
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      Alert.alert("Veículo deletado!");
    } catch (err) {
      Alert.alert(err.message || "Failed to delete car");
    }
  };

  const changeBrandFilter = (itemValue: string) => {
    setSelectedBrand(itemValue);
    setFilter((prev) => ({ ...prev, brand: itemValue }));
  };

  const handleShowSold = () => {
    const updatedShowSold = !showSold;
    setButtonColor(showSold ? "grey" : "blue");
    setShowSold(updatedShowSold);

    setFilter((prev) => {
      const newFilter = { ...prev };
      if (updatedShowSold) {
        newFilter.showSold = "true";
      } else {
        delete newFilter.showSold;
      }
      return newFilter;
    });
  };

  const handleFilter = async (remove: boolean = false) => {
    try {
      let params: Array<string> = [];
      if (filter.brand) {
        params.push(`brand="${filter.brand}"`);
      }
      if (!showSold) {
        params.push(`availability!="sold"`);
      }

      const query = params.join(" && ");

      const response = await filterQuery(query, remove);
      setCars(response);
    } catch (err) {
      Alert.alert(err.message || "Failed to fetch car details");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars API LIST</Text>

      <Link href="/userspace/create_car" style={styles.button}>
        <Text style={{ color: "white" }}>Create a new Car</Text>
      </Link>

      <View style={styles.filters}>
        <View style={styles.selectFilter}>
          <Text>Select a car brand:</Text>
          <Picker style={styles.picker} selectedValue={selectedBrand} onValueChange={changeBrandFilter}>
            {carBrands.map((brand, index) => (
              <Picker.Item key={index} label={brand} value={brand} />
            ))}
          </Picker>
        </View>

        <View style={styles.filterButtons}>
          <Pressable style={styles.button} onPress={() => handleFilter(false)}>
            <Text style={{ color: "white" }}>Filter</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => handleFilter(true)}>
            <Text style={{ color: "white" }}>Remove Filter</Text>
          </Pressable>
          <Pressable style={styles.switchButton} onPress={handleShowSold}>
            <Text style={{ color: "white" }}>Show sold</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.carRowHead}>
              <Text>{item.id}</Text>
              <View style={styles.carRowHeadButtons}>
                <Link href={{ pathname: "userspace/edit_car", params: { id: item.id } }}>
                  <Ionicons name="pencil" size={20} color="blue" />
                </Link>
                <Pressable onPress={() => handleDelete(item.id)}>
                  <Ionicons name="trash" size={20} color="red" />
                </Pressable>
              </View>
            </View>

            <Text style={styles.listRow}>Brand: {item.brand}</Text>
            <Text style={styles.listRow}>Model: {item.model}</Text>
            <Text style={styles.listRow}>HP: {item.hp}</Text>
            <Text style={styles.listRow}>{item.availability}</Text>
          </View>
        )}
        keyExtractor={(car) => car.id}
        style={styles.flatlist}
      />
    </View>
  );
}
