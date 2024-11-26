import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DrawerMenu from "../../components/headers/DrawerMenu";
import DefaultHeader from "../../components/headers/DefaultHeader";
import HeaderActionSheet from "../../components/headers/HeaderActionSheet";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function layout() {
  return (
    <ActionSheetProvider>
      <View style={{ flex: 1 }}>
        <HeaderActionSheet
          removeMenuItems={["Listing"]}
          title="Trips listing"
        />
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({});
