import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import FullScreen from '../../components/containers/FullScreen'
import ValidationInput from '../../components/generics/ValidationInput'
import { DEFAULT_GAP, DEFAULT_MARGIN } from '../../constants/GlobalStyles'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Index() {
    const { theme } = useContext(ThemeContext);

    const [username, setUsername] = useState('Fulano');
    const [email, setEmail] = useState('fulano@example.com');

    const atualizarDados = () => {
        if (username.trim() !== '' && email.trim() !== '') {
            alert('Dados atualizados!');
        } else {
            alert('Um ou mais campos vazios!');
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        inputWrapper: {
            alignItems: "center",
            gap: DEFAULT_GAP * 3,
        },
        buttonWrapper: {
            marginTop: DEFAULT_MARGIN * 3,
        },
        button: {
            padding: 10,
            backgroundColor: theme.icon,
            borderRadius: 5,
            alignItems: 'center',
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.container}>
            <FullScreen justify="flex-start">
                <View style={styles.inputWrapper}>
                    <ValidationInput
                        label="Username"
                        accessibilityLabel="Username"
                        value={username}
                        onChangeText={setUsername} // Permite edição
                        theme={theme}
                    />
                    <ValidationInput
                        label="Email"
                        accessibilityLabel="Email"
                        value={email}
                        onChangeText={setEmail} // Permite edição
                        theme={theme}
                    />
                </View>
                <Pressable style={styles.button} onPress={atualizarDados}>
                    <Text style={styles.buttonText}>Atualizar</Text>
                </Pressable>
            </FullScreen>
        </View>
    );
}
