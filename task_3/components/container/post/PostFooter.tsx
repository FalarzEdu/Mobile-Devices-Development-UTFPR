import { StyleSheet, Text, View } from "react-native";
import React from "react";

type PostFooterProps = {
  ownerName: string;
  postDescription: string;
};

export default function PostFooter(props: PostFooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        <Text style={styles.ownerName}>{props.ownerName} </Text>
        {props.postDescription}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15,
  },
  description: {
    flex: 1,
  },
  ownerName: {
    fontWeight: "600",
  },
});
