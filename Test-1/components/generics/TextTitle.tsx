import { StyleSheet, Text, View } from "react-native";
import React from "react";

type TextTitleProps = {
  text: string;
};

export default function TextTitle({ text }: TextTitleProps) {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    paddingTop: 15,
    paddingBottom: 15,
  },
});
