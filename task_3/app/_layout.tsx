import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

export default function mainLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Image
            style={styles.StackImage}
            source={require("../assets/images/insta.png")}
          />
        ),
        headerRight: () => (
          <View style={styles.HeaderIcons}>
            <FontAwesome6 name="heart" size={26} color="black" />
            <FontAwesome5 name="facebook-messenger" size={26} color="black" />
          </View>
        ),
        headerStyle: styles.Stack,
        title: "",
      }}
    ></Stack>
  );
}

const styles = StyleSheet.create({
  Stack: {
    backgroundColor: "white",
    color: "white",
  },
  StackImage: {
    width: 140,
    height: 60,
  },
  HeaderIcons: {
    flexDirection: "row",
    gap: 20,
  },
});
