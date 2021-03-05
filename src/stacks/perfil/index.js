import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomePerfil from './homePerfil';
import LoginScreen from './login';
import CadastroScreen from './cadastro-mediador';
import GerenciamentoScreen from './gerenciamento';
import ContatoScreen from './contato';



const Stack = createStackNavigator();

export default function PerfilStack() {
  return (

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePerfil"                   component={HomePerfil} />
        <Stack.Screen name="LoginScreen"           component={LoginScreen} />
        <Stack.Screen name="CadastroScreen"           component={CadastroScreen} />
        <Stack.Screen name="GerenciamentoScreen"      component={GerenciamentoScreen} />
        <Stack.Screen name="ContatoScreen"            component={ContatoScreen} />
      </Stack.Navigator>

  );
}
