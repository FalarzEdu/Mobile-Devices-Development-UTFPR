import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { DEFAULT_GAP, DEFAULT_PADDING } from "../../constants/GlobalStyles";

type FullScreenProps = {
  children: ReactNode;
  justify?: "flex-start" | "center" | "flex-end";
  align?: "flex-start" | "center" | "flex-end";
};

export default function FullScreen({
  children,
  justify = "center",
  align = "center",
}: FullScreenProps) {
  return (
    <View
      style={[styles.container, { justifyContent: justify, alignItems: align }]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP * 2,
  },
});
