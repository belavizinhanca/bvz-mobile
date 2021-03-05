import React from 'react';
import {View,  } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CadastroScreen(props) {
    const { navigation } = props;
    return (
        <View>
          <Icon name="chevron-back" size={28} color="black" style={{marginTop:20}} onPress={() => navigation.goBack()} />

          <View style={{paddingTop:50}}>
            <Text h3 style={{textAlign:'center'}}>Cadastre-se para ser um mediador</Text>
          <Input placeholder="Nome" leftIcon={{ type: 'font-awesome', name: 'user' }} 
          // onChangeText={value => this.setState({ comment: value })} 
          />

          <Input placeholder="Telefone" leftIcon={{ type: 'font-awesome', name: 'phone' }} 
          // onChangeText={value => this.setState({ comment: value })}
           />

          <Input placeholder="Endereço" leftIcon={{ type: 'font-awesome', name: 'road' }} 
          // onChangeText={value => this.setState({ comment: value })} 
          />

          <Input placeholder="E-mail" leftIcon={{ type: 'MaterialIcons', name: 'email' }} 
          // onChangeText={value => this.setState({ comment: value })}
           />

          <Input placeholder="Senha" secureTextEntry={true} />
          <Button title="Cadastrar" buttonStyle={{width:250, alignSelf:'center'}} />
          </View>
       
      </View>
    );
  
} 