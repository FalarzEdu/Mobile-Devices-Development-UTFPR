import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { DEFAULT_PADDING } from "../../constants/GlobalStyles";

type ValidationInputProps = {
  label: string;
  errorMessage?: string;
  currentState?: "valid" | "invalid";
  theme: {
    text: string;
    background: string;
  };
} & TextInputProps;

export default function ValidationInput({
  label,
  errorMessage,
  currentState,
  theme,
  ...rest
}: ValidationInputProps) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: 16,
      backgroundColor: theme.background
    },
    label: {
      fontSize: 16,
      color: theme.text,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: theme.text,
      color: theme.text,
      backgroundColor: theme.background,
      width: 260,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.text}
        {...rest}
      />
    </View>
  );
}