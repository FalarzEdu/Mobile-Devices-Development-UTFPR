import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderActionSheet from "../../components/headers/HeaderActionSheet";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ThemeProvider } from "../../contexts/ThemeContext";

export default function layout() {
  return (
    <ThemeProvider>
      <ActionSheetProvider>
        <View style={{ flex: 1 }}>
          <HeaderActionSheet
            removeMenuItems={["Listing"]}
            title="Trips listing"
          />
        </View>
      </ActionSheetProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
