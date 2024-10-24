import { StyleSheet, Text, View, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Page() {
  const random = Math.trunc(Math.random() * 100);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={{ pathname: "/about" }}>Go to about!</Link>

        <Link href={{ pathname: "/post", params: { id: random } }}>
          Go to post {random}!
        </Link>

        <Button
          title="Click on me!"
          onPress={() => {
            router.replace("/about");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
