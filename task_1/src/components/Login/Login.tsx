import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const leakData = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(updateText) => setUsername(updateText)}
      />
      <TextInput
        placeholder='Your "confidential" password'
        value={password}
        onChangeText={(updateText) => setPassword(updateText)}
        secureTextEntry
      />
      <Button title="Leak your data!" onPress={leakData} />
    </View>
  );
}
