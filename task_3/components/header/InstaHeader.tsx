import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useFonts from "@/hooks/useFonts";

/* FONT AWESOME SETUP */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Stack } from "expo-router";

export default function instaHeader() {
  // const fonts = useFonts();

  return (
    // <View style={styles.container}>
    //   <Text style={styles.logo}>Instagram</Text>
    //   <View style={styles.icons}>
    //     <FontAwesomeIcon icon={faHeart} size={26} />
    //     <FontAwesomeIcon icon={faFacebookMessenger} size={26} />
    //   </View>
    // </View>

    <View>
      <Stack
        screenOptions={{
          title: "adadass",
          headerShown: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontFamily: "InstagramFont",
    fontSize: 30,
    height: 40,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
