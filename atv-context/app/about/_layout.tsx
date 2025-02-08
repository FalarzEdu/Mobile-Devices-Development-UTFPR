import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderActionSheet from "../../components/headers/HeaderActionSheet";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ThemeProvider } from "../../contexts/ThemeContext";

export default function _aboutLayout() {
  return (
    <ThemeProvider>
      <ActionSheetProvider>
        <HeaderActionSheet removeMenuItems={["About"]} title="About this App" />
      </ActionSheetProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
