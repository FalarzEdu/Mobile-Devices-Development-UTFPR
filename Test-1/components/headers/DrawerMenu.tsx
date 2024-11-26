import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

type DrawerMenuProps = {
  title: string;
};

export default function DrawerMenu({ title }: DrawerMenuProps) {
  return (
    <View style={styles.container}>
      <Drawer
        screenOptions={{
          title: title,
          drawerPosition: "right",
          headerLeft: () => false,
          headerRight: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen
          name="/about"
          options={{
            drawerLabel: "About",
          }}
        />
        <Drawer.Screen
          name="/"
          options={{
            drawerLabel: "Log out",
          }}
        />
      </Drawer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
