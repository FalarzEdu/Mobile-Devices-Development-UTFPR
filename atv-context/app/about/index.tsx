import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import FullScreen from "../../components/containers/FullScreen";
import TextTitle from "../../components/generics/TextTitle";
import Card from "../../components/generics/Card/Card";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      gap: 15,
    },
    normalText: {
      textAlign: "center",
      fontWeight: "500",
      fontSize: 18,
      color: theme.text,
    },
    githubContainer: {
      gap: 20,
    },
  });

  return (
    <View style={styles.container}>
      <FullScreen justify="flex-start">
        <TextTitle text="App title"/>
        <Card>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.normalText}>Versão 1.0.0</Text>
            </View>
            <View style={styles.githubContainer}>
              <Text style={styles.normalText}>Developed By:</Text>
              <Text style={styles.normalText}>Eduardo Falarz</Text>
              <Link
                href={"https://github.com/FalarzEdu/"}
                style={styles.normalText}
              >
                <Ionicons name="logo-github" size={50} color={theme.text} />
              </Link>
            </View>
          </View>
        </Card>
      </FullScreen>
    </View>
  );
}