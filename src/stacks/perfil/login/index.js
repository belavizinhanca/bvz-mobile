import React from 'react';
import {View,  } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen(props) {
    const { navigation } = props;
    return (
        <View>
          <Icon name="chevron-back" size={28} color="black" style={{marginTop:20}} onPress={() => navigation.goBack()} />

          <View style={{paddingTop:50}}>
            <Text h3 style={{textAlign:'center'}}>Entre com seu e-mail e senha</Text>
          <Input placeholder="E-mail" leftIcon={{ type: 'font-awesome', name: 'user' }} 
          />

          <Input placeholder="Senha" secureTextEntry={true} />
          <Button title="Entrar" buttonStyle={{width:250, alignSelf:'center'}} />
          </View>
       
      </View>
    );
  
} 