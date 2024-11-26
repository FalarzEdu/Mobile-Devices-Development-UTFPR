import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ValidationInput from "../components/generics/ValidationInput";
import FullScreen from "../components/containers/FullScreen";
import ImageButton from "../components/specifics/ImageButton";
import { DEFAULT_GAP, DEFAULT_MARGIN } from "../constants/GlobalStyles";
import { router } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function handleLogin(): void {
    if (username === "Fulano" && password === "123") {
      router.push("/listing");
    }
  }

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <FullScreen justify="flex-start">
          <Image
            source={require("../assets/brand-logo.png")}
            style={styles.logoImage}
          />
          <View style={styles.inputWrapper}>
            <ValidationInput
              label="Username"
              onChangeText={setusername}
              value={username}
            />
            <ValidationInput
              label="Password"
              onChangeText={setpassword}
              value={password}
              secureTextEntry
            />
            <View style={styles.buttonWrapper}>
              {/* <ImageButton
                imagePath={require("../assets/login-btn.png")}
                heigth={80}
                width={120}
              /> */}
              <ImageButton
                imagePath={require("../assets/login-btn2.png")}
                heigth={70}
                width={70}
                onPress={() => {
                  handleLogin();
                }}
              />
            </View>
          </View>
        </FullScreen>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImage: {
    width: 140,
    height: 140,
  },
  inputWrapper: {
    alignItems: "center",
    position: "relative",
    gap: DEFAULT_GAP * 3,
    top: 160,
  },
  buttonWrapper: {
    marginTop: DEFAULT_MARGIN * 3,
  },
});
