import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type DefaultHeaderProps = {
  title: string;
};

export default function DefaultHeader({ title }: DefaultHeaderProps) {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: styles.stack,
          headerTitle: title,
          headerShown: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stack: {
    backgroundColor: "lightblue",
    color: "black",
  },
});
