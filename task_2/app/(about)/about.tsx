import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function about() {
  return (
    <View>
      <Text>This is an about page!</Text>
      <Link href={{ pathname: "/" }}>Go back!</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
