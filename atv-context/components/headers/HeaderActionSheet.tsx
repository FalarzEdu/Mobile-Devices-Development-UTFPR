import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react"; // Import useContext
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { ThemeContext } from "../../contexts/ThemeContext"; // Import ThemeContext

type HeaderActionSheetProps = {
  title: string;
  removeMenuItems: Array<string>;
};

export default function HeaderActionSheet({
  removeMenuItems,
  title,
}: HeaderActionSheetProps) {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get the current theme
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
    }
    router.replace("/");
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: theme.background,
    },
    headerTitle: {
      color: theme.text
    },
    menuIcon: {
      color: theme.icon,
    },
    icons: {
      flex: 1,
      flexDirection: 'row',
      gap: 48,
      justifyContent: 'flex-end',
      paddingEnd: 32
    }
  });

  return (
    <Stack
      screenOptions={{
        title: title,
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.header,
        headerRight: () => (
          <View style={styles.icons}>
            <Pressable onPress={toggleTheme}>
              <Entypo
                name={theme.mode === "light" ? "moon" : "light-up"}
                size={36}
                style={styles.menuIcon}
              />
            </Pressable>
            
            <Pressable onPress={handleOpen}>
              <Entypo name="menu" size={36} style={styles.menuIcon} />
            </Pressable>
          </View>
        ),
      }}
    />
  );
}