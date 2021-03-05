import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider, DefaultTheme } from 'react-native-paper'
import MainTab from './src/components/MainTabNavi';


const tema = {
  ...DefaultTheme,
  roundness:2,
  ...DefaultTheme.colors,
      primary: '#000',
      accent: '#EDAF44',
      backgroundColor:'#fff'
}

export default function App() {
  return (
      <Provider>        
        <MainTab />
      </Provider>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
