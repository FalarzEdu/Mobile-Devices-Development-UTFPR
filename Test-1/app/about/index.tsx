import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import FullScreen from "../../components/containers/FullScreen";
import TextTitle from "../../components/generics/TextTitle";
import Card from "../../components/generics/Card/Card";
import { Ionicons } from "@expo/vector-icons";

export default function about() {
  return (
    <View style={styles.container}>
      <FullScreen justify="flex-start">
        <TextTitle text="App title" />
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
                <Ionicons name="logo-github" size={50} />
              </Link>
            </View>
          </View>
        </Card>
      </FullScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: 15,
  },
  normalText: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
  },
  githubContainer: {
    gap: 20,
  },
});
