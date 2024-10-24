import { Slot, Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function PostsLayout() {
  return (
    <Stack
      screenOptions={{ title: "Posts cool page", headerStyle: styles.Stack }}
    ></Stack>
  );
}

const styles = StyleSheet.create({
  Stack: {
    backgroundColor: "green",
    color: "white",
  },
});
