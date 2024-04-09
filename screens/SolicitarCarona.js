import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importando ícones FontAwesome5

const SolicitarCarona = () => {
    const [caronas, setCaronas] = useState([]); // Lista de caronas disponíveis
    const [filtro, setFiltro] = useState(''); // Estado para o filtro de pesquisa

    // Simular dados de caronas (para demonstração)
    const dadosCaronas = [
        { id: 1, nome: 'João', local: 'Shopping', horario: '15:00', avaliacao: 4.5 },
        { id: 2, nome: 'Maria', local: 'Supermercado', horario: '14:30', avaliacao: 4.8 },
        { id: 3, nome: 'Pedro', local: 'Faculdade', horario: '16:00', avaliacao: 4.2 },
        { id: 4, nome: 'Ana', local: 'Praia', horario: '13:00', avaliacao: 4.9 },
    ];

    useEffect(() => {
        // Carregar as caronas automaticamente ao exibir a tela
        setCaronas(dadosCaronas);
    }, []); // Este array vazio como segundo argumento faz com que useEffect só seja executado uma vez, após o componente ser montado

    // Função para filtrar caronas com base no filtro de pesquisa
    const filtrarCaronas = () => {
        return caronas.filter(caronas => {
            return caronas.nome.toLowerCase().includes(filtro.toLowerCase());
        });
    };

    // Função para renderizar cada item da lista de caronas
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.detalhes}>{item.local} - {item.horario}</Text>
            <Text style={styles.avaliacao}>Avaliação: {item.avaliacao}</Text>
        </View>
    );

    const handleSolicitarPersonalizada = () => {
        // Implemente a lógica para solicitar uma carona personalizada aqui
        console.log('Solicitando carona personalizada...');
    };

    return (
        <View style={styles.container}>
            <View style={styles.filtroContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Filtrar caronas"
                    value={filtro}
                    onChangeText={setFiltro}
                />
                <TouchableOpacity style={styles.botaoPersonalizado} onPress={handleSolicitarPersonalizada}>
                    <Text style={styles.textoBotao}>Solicitar Personalizada</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filtrarCaronas()}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.lista}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    filtroContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    botaoPersonalizado: {
        backgroundColor: 'green',
        marginLeft: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detalhes: {
        fontSize: 16,
        color: '#666',
    },
    avaliacao: {
        fontSize: 16,
        color: 'green',
    },
});

export default SolicitarCarona;
