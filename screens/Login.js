import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    try {
      const listaUsuarios = await AsyncStorage.getItem('@usuarios');
      if (listaUsuarios !== null) {
        const usuarios = JSON.parse(listaUsuarios);
        const usuarioExistente = usuarios.find(u => u.usuario === usuario && u.senha === senha);
        if (usuarioExistente) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Tela1' }],
          });
        } else {
          Alert.alert('Erro', 'Nome de usuário ou senha incorretos.');
        }
      } else {
        Alert.alert('Erro', 'Nenhum usuário cadastrado.');
      }
      // Se o login for bem-sucedido, navegue para a tela EscolhaUsuario
      navigation.navigate('EscolhaUsuario');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente.');
    }
  };

  const cadastrar = async () => {
    try {
      const usuarioNovo = { usuario, senha };
      const listaUsuarios = await AsyncStorage.getItem('@usuarios');
      if (listaUsuarios !== null) {
        const usuarios = JSON.parse(listaUsuarios);
        const usuarioExistente = usuarios.find(u => u.usuario === usuario);
        if (usuarioExistente) {
          Alert.alert('Erro', 'Usuário já cadastrado.');
        } else {
          const novaLista = [...usuarios, usuarioNovo];
          await AsyncStorage.setItem('@usuarios', JSON.stringify(novaLista));
          Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
        }
      } else {
        await AsyncStorage.setItem('@usuarios', JSON.stringify([usuarioNovo]));
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Erro ao cadastrar usuário. Tente novamente.');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={[styles.label, styles.font]}>Usuário</Text>
        <TextInput
            style={[styles.input, styles.font]}
            value={usuario}
            onChangeText={setUsuario}
            placeholder="Digite seu usuário"
        />
        <Text style={[styles.label, styles.font]}>Senha</Text>
        <TextInput
            style={[styles.input, styles.font]}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={cadastrar}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={fazerLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#888',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Login;
