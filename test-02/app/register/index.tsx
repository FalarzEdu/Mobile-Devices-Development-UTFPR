import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { DEFAULT_MARGIN, DEFAULT_PADDING } from '../../constants/GlobalStyles';
import ValidationInput from '../../components/generics/ValidationInput';
import { router } from 'expo-router';

export default function index() {

  const { theme } = useContext(ThemeContext);

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registrar = () => {
    if (
      username === '' || password === '' || email === ''
    ) {
      alert('Um ou mais campos inválidos!');
    } else {
      alert('Registro feito com sucesso!');
      router.back();
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    title: {
      color: theme.bigText,
      fontSize: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: DEFAULT_MARGIN
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      margin: 'auto'
    },
    submit: {
      margin: 'auto',
      color: theme.bigText,
      padding: DEFAULT_PADDING * 2,
      marginBottom: DEFAULT_MARGIN,
      marginTop: DEFAULT_MARGIN * 2
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <ValidationInput
          label="Username"
          accessibilityLabel='Username'
          onChangeText={setusername}
          value={username}
          theme={theme}
        />
        <ValidationInput
          label="Password"
          accessibilityLabel='Password'
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          theme={theme}
        />
        <ValidationInput
          label="Email"
          accessibilityLabel='Email'
          onChangeText={setEmail}
          value={email}
          theme={theme}
        />
      </View>
      <Pressable style={styles.submit} onPress={registrar}>
        <Text>Registrar</Text>
      </Pressable>
    </View>
  )
}