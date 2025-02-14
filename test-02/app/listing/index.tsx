import { Image, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import data from "../../services/data-passengers";
import filterList from "../../helpers/DataConvertion";
import { DEFAULT_MARGIN, DEFAULT_PADDING } from "../../constants/GlobalStyles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function PassengerList() {
  const { theme } = useContext(ThemeContext);
  const filteredCategories = filterList(data);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    section: {
      padding: DEFAULT_PADDING / 2,
      alignSelf: "center",
      margin: DEFAULT_MARGIN * 1.5,
      borderRadius: 15,
      backgroundColor: theme.background
    },
    sectionTitle: {
      marginTop: DEFAULT_MARGIN * 3,
      marginBottom: DEFAULT_MARGIN * 1.5,
      fontWeight: "bold",
      fontSize: 18,
      color: theme.bigText,
      textAlign: "center",
    },
    passengerRow: {
      flexDirection: "row",
      alignSelf: "center",
      textAlign: "left",
      paddingTop: DEFAULT_PADDING / 4,
      paddingBottom: DEFAULT_PADDING / 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.background,
      gap: 50,
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
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.section}
        sections={filteredCategories}
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