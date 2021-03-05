import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import { Modal, Portal, Provider } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'



export default function HomePerfil(props) {

    const { navigation } = props;

   
  return (
    <View>
      <View style={styles.displayDeslogado}>

        <Text h2 style={{paddingTop:40}}> Seu perfil,</Text>

        <Text style={{margin:20}}>Já é um mediador cadastrado ? Acesse sua conta e administre as demandas. 
        </Text>

        <Button onPress={() => navigation.navigate('LoginScreen')} buttonStyle={{maxWidth:150, width:250, alignSelf:'center', margin:10 }} 
        title="Entrar" />

        <Text style={{margin:20}}>Para ser um mediador e começar a enviar novas demandas,  
        <Button title="Cadastre-se " type="clear" buttonStyle={{width:250, margin:5 }} onPress={() => navigation.navigate('CadastroScreen')}/>
        </Text>

        <Divider style={{ backgroundColor: 'grey', margin:30 }} />

        <Button title="Gerenciar" type="clear"/>

        <Divider style={{ backgroundColor: 'grey', margin:30 }} />


        <Button title="Contato" icon={<MaterialIcon name='local-post-office' size={15} />} type="clear"  />

        <Divider style={{ backgroundColor: 'grey', margin:30 }} />

      </View>

    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Stack Perfil</Text>
    //     <Button
    //     title="Go to CadastroScreen"
    //     onPress={() => navigation.navigate('CadastroScreen')} />
    //      <Button
    //     title="Go to GerenciamentoScreen"
    //     onPress={() => navigation.navigate('GerenciamentoScreen')} />
    //      <Button
    //     title="Go to ContatoScreen"
    //     onPress={() => navigation.navigate('ContatoScreen')} />
    // </View>
  );
}
