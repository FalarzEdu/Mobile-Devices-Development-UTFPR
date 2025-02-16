import { Redirect } from "expo-router";
import { Alert, Button, Text, View } from "react-native";
import { useTokenContext } from "../src/contexts/userContext";
import api from "../src/services/api";
import { StyleSheet } from "react-native";

export default function Login() {
  const { token, setToken } = useTokenContext();

  if (token) return <Redirect href="/userspace" />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Can u keep a secret? you should know that fulano can login with
        pdm123pdm
      </Text>

      <Button
        title="login"
        onPress={async () => {
          try {
            const result = await api.post(
              "/api/collections/users/auth-with-password",
              {
                identity: "fulano@example.com",
                password: "12345678",
              }
            );

            setToken(result.data.token);
          } catch (error) {
            Alert.alert(error.message);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    width: '70%',
    marginTop: 32,
    marginBottom: 64
  }
});