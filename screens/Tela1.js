import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
    const irParaLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../Imagens/logomandacarona.jpeg')}
                style={styles.logo}
            />
            <Text style={styles.texto}>
                Bem-vindo ao aplicativo de carona universitária.
                O acesso é restrito somente para usuários vinculados
                à UFCA - Universidade Federal do Cariri.
            </Text>
            <TouchableOpacity style={styles.botao} onPress={irParaLogin}>
                <Text style={styles.textoBotao}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    texto: {
        marginVertical: 20,
        textAlign: 'center',
    },
    botao: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TelaInicial;
