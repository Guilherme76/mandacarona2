import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';

const OferecerCarona = () => {
    const [destino, setDestino] = useState('');
    const [horario, setHorario] = useState('');
    const [numPessoas, setNumPessoas] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleOferecerCarona = () => {
        // Implemente a lógica para oferecer a carona aqui
        // Por enquanto, vamos apenas exibir o modal de sucesso
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Destino:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o destino"
                value={destino}
                onChangeText={setDestino}
            />
            <Text style={styles.label}>Horário de Saída:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o horário de saída"
                value={horario}
                onChangeText={setHorario}
            />
            <Text style={styles.label}>Número de Pessoas:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o número de pessoas que pode levar"
                value={numPessoas}
                onChangeText={setNumPessoas}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.botao} onPress={handleOferecerCarona}>
                <Text style={styles.textoBotao}>Oferecer</Text>
            </TouchableOpacity>

            {/* Modal de sucesso */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Carona oferecida com sucesso!</Text>
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: 'green',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro transparente
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5, // Elevação para sombra no Android
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default OferecerCarona;
