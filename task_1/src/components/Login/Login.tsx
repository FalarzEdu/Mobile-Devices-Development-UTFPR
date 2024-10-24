import { View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const leakData = (user: string, pass: string) => {
    console.log(user);
    console.log(pass);
  };

  // const leakData2 = () => {
  //   console.log(username);
  //   console.log(password);
  // };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Your "confidential" password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Leak your data!"
        onPress={() => {
          leakData(username, password);
        }}
      />

      {/* <Button title="Leak your data!" onPress={leakData2} /> */}
    </View>
  );
}
