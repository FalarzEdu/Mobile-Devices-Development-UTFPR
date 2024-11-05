import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InstaHeader from "@/components/header/InstaHeader";
import Profile from "@/components/container/profile/Profile";
import { useLocalSearchParams } from "expo-router";

export default function userProfile() {
  const ROUTE_PARAMS = useLocalSearchParams();

  return (
    <View>
      <Profile ownerImage={require("../../assets/images/user1.jpeg")} />
    </View>
  );
}

const styles = StyleSheet.create({});
