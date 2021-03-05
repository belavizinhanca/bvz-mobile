import React from 'react';
import { View, StatusBar, Text, ScrollView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


import styles from './styles';


function Home() { 

  return(
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000000"  />
      <ScrollView>
        <Card>          
          <Card.Content>
            <Title>Projeto Bela Vizinhança, faça o bem sem olhar a quem.</Title>
            <Paragraph>A empatia é certamente um dos mais nobres sentimentos humanos. Para entender e ajudar o próximo e necessário se imaginar na condição dele Acreditamos que existe sempre uma saída, até mesmo para os problemas quem parecem impossível de superar Que o desejo de ajudar o próximo consiga sempre superar a falta de esperança no ser humano.</Paragraph>
          </Card.Content>
          <Card.Cover source={require('../../../assets/Images/contatobg.jpg')} />
        </Card>

        <Card>
          <Card.Title title="Entenda um Pouco da Realidade" subtitle="" />
          <Card.Content>
            <Title></Title>
          </Card.Content>
          <Card.Cover source={require('../../../assets/Images/youtube1.jpg')} />
          <Title>'É horrível dormir com sede': moradores de rua de SP sofrem em cidade sem bebedouros</Title>
              <Paragraph>A reportagem da BBC News Brasil entrevistou dezenas de moradores de rua para saber o que eles fazem para conseguir água em São Paulo.
              </Paragraph><Paragraph>Com poucas opções para conseguir água por conta própria - como nascentes e torneiras externas de alguns prédios públicos -, muitos dependem da sorte e da ajuda de voluntários para ter acesso a água limpa.</Paragraph>
        </Card>

        <Card>
          <Card.Content>        
          </Card.Content>
          <Card.Cover source={require('../../../assets/Images/youtube2.jpg')} />
          <Title>MORAR NA RUA</Title>
              <Paragraph>Conversamos com diversas pessoas que moram na rua para entender como é a vida delas. Alguns estão ali por escolha. A maioria, por falta de opção. Histórias que merecem a nossa atenção.</Paragraph>
        </Card>
    </ScrollView>
    </View>
        )
}

export default Home;