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
} & TextInputProps;

export default function ValidationInput({
  label,
  errorMessage,
  currentState,
  ...rest
}: ValidationInputProps) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <TextInput
        style={errorMessage ? styles.inputInvalid : styles.input}
        {...rest}
      ></TextInput>

      {errorMessage && <Text style={styles.label}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#f6f6f6",
    borderStyle: "solid",
    width: 260,
  },
  inputInvalid: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
    borderStyle: "solid",
    width: 260,
  },
  label: {
    color: "red",
    fontSize: 12,
    paddingTop: DEFAULT_PADDING / 8,
  },
});
