import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import TelaInicial from './screens/Tela1';
import EscolhaUsuario from './screens/EscolhaUsuario';
import SolicitarCarona from './screens/SolicitarCarona'
import OferecerCarona from './screens/OferecerCarona';


const Stack = createNativeStackNavigator();

function Pilha() {
  return (
        <Stack.Navigator>
          <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="EscolhaUsuario" component={EscolhaUsuario} options={{ headerShown: false }} />
            <Stack.Screen name="SolicitarCarona" component={SolicitarCarona} options={{ title: 'Solicitar Carona' }} />
            <Stack.Screen name="OferecerCarona" component={OferecerCarona} options={{ title: 'Oferecer Carona' }} />
        </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Pilha />
      </NavigationContainer>
  );
}
