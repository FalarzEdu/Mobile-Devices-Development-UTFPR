import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

type HeaderActionSheetProps = {
  title: string;
  removeMenuItems: Array<string>;
};

export default function HeaderActionSheet({
  removeMenuItems,
  title,
}: HeaderActionSheetProps) {
  const router = useRouter();

  const { showActionSheetWithOptions } = useActionSheet();
  let optionsAux = ["Listing", "About", "Cancel", "Logout"];
  removeMenuItems.forEach((element) => {
    const elementIndex: number = optionsAux.indexOf(element);
    if (elementIndex != -1) {
      optionsAux.splice(elementIndex, 1);
    }
  });
  const options = optionsAux;
  const destructiveButtonIndex = options.length - 1;
  const cancelButtonIndex = 2;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex: number | undefined) => {
        if (buttonIndex === undefined) return;
        if (buttonIndex < options.length - 2) {
          const newRoute: string = options[buttonIndex].toLowerCase();
          router.push(`/${newRoute}`);
        }
        if (buttonIndex === options.length - 1) {
          logout();
        }
      }
    );
  };

  const logout = (): void => {
    if (router.canDismiss()) {
      router.dismissAll();
      console.log("b");
    }
    console.log("a");
    router.replace("/");
  };

  return (
    <Stack
      screenOptions={{
        title: title,
        headerRight: () => (
          <Pressable onPress={handleOpen}>
            <Entypo name="menu" size={36} color="black" />
          </Pressable>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue",
  },
});
