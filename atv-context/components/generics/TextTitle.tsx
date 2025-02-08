import { StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext"; // Import ThemeContext
import React, { useContext } from "react";

type TextTitleProps = {
  text: string;
};

export default function TextTitle({ text }: TextTitleProps) {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    title: {
      color: theme.bigText,
      fontSize: 24,
      fontWeight: "700",
      paddingTop: 15,
      paddingBottom: 15,
    },
  });

  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}
