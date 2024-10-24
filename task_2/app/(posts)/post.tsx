import { StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";

export default function Post() {
  const postNumber = useLocalSearchParams();

  return (
    <View>
      <Text>Post number {postNumber.id}</Text>
      <Link href={{ pathname: "/" }}>Go back!</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
