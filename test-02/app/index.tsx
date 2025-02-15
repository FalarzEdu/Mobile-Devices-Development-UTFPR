import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import ValidationInput from "../components/generics/ValidationInput";
import FullScreen from "../components/containers/FullScreen";
import ImageButton from "../components/specifics/ImageButton";
import { DEFAULT_GAP, DEFAULT_MARGIN } from "../constants/GlobalStyles";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ThemeContext } from "../contexts/ThemeContext";
import { handleLogin } from "../utils/authUtils";
import { Link, router } from "expo-router";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const [username, setusername] = useState("Fulano");
  const [password, setpassword] = useState("123");

  function callLogin(): void {
    handleLogin(username, password, router);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    logoImage: {
      width: 140,
      height: 140,
    },
    inputWrapper: {
      alignItems: "center",
      position: "relative",
      gap: DEFAULT_GAP * 3,
      top: 0,
    },
    buttonWrapper: {
      marginTop: DEFAULT_MARGIN * 3,
    },
  });

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
              theme={theme}
            />
            <ValidationInput
              label="Password"
              onChangeText={setpassword}
              value={password}
              secureTextEntry
              theme={theme}
            />
            <View>
              <Link href="register/" >Cadastrar-se</Link>
            </View>
            <View style={styles.buttonWrapper}>
              <ImageButton
                imagePath={require("../assets/login-btn2.png")}
                heigth={70}
                width={70}
                onPress={callLogin}
              />
            </View>
          </View>
        </FullScreen>
      </View>
    </ActionSheetProvider>
  );
}