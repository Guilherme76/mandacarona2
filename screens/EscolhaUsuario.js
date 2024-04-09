import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importando ícones FontAwesome5

const EscolhaUsuario = ({ navigation }) => {
    const irParaMotorista = () => {
        // Navegar para a tela de motorista
        navigation.navigate('OferecerCarona');
    };

    const irParaPassageiro = () => {
        // Navegar para a tela de passageiro
        navigation.navigate('SolicitarCarona');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha uma opção:</Text>
            <TouchableOpacity style={styles.botao} onPress={irParaMotorista}>
                <FontAwesome5 name="car" size={24} color="white" style={styles.icone} />
                <Text style={styles.textoBotao}>Oferecer Carona</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={irParaPassageiro}>
                <FontAwesome5 name="user" size={24} color="white" style={styles.icone} />
                <Text style={styles.textoBotao}>Solicitar Carona</Text>
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
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    botao: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        width: '100%', // Largura definida como 100%
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centralizar conteúdo horizontalmente
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icone: {
        marginRight: 10,
    },
});

export default EscolhaUsuario;
