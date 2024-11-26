import { Image, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../../services/data-passengers";
import filterList from "../../helpers/DataConvertion";
import { DEFAULT_MARGIN, DEFAULT_PADDING } from "../../constants/GlobalStyles";

export default function index() {
  const filteredCategories = filterList(data);

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.section}
        sections={filteredCategories}
        // keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <View style={styles.passengerRow}>
            <Image
              style={styles.passengerPhoto}
              source={{ uri: item.passenger_avatar }}
            />
            <Text style={styles.sectionText}>{item.passenger_name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>
            {section.title} - Passengers: {section.passengerCount}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: DEFAULT_PADDING / 2,
    boxShadow: "0 3 15 -4 black",
    alignSelf: "center",
    margin: DEFAULT_MARGIN * 1.5,
    borderRadius: 15,
  },
  sectionTitle: {
    marginTop: DEFAULT_MARGIN * 3,
    marginBottom: DEFAULT_MARGIN * 1.5,
    fontWeight: "bold",
    fontSize: 18,
    color: "blue",
    textAlign: "center",
  },
  passengerRow: {
    flexDirection: "row",
    alignSelf: "center",
    textAlign: "left",
    paddingTop: DEFAULT_PADDING / 4,
    paddingBottom: DEFAULT_PADDING / 4,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    gap: "50",
    width: "90%",
  },
  passengerPhoto: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
  sectionText: {
    fontSize: 16,
    alignSelf: "center",
  },
});
