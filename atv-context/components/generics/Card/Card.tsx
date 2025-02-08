import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "../../../constants/GlobalStyles";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderColor: "black",
    // borderWidth: 1,
    // borderStyle: "solid",
    borderRadius: DEFAULT_RADIUS * 1,
    boxShadow: "0 3 15 -4 #b3b4b5",
  },
  titleContainer: {
    backgroundColor: "lightblue",
    borderTopStartRadius: DEFAULT_RADIUS,
    borderTopEndRadius: DEFAULT_RADIUS,
    paddingLeft: DEFAULT_PADDING / 2,
    paddingTop: DEFAULT_PADDING / 1.5,
    paddingBottom: DEFAULT_PADDING / 1.5,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    padding: DEFAULT_PADDING,
  },
});
