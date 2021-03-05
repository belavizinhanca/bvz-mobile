import React from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


function Sobre() {
    

  return(
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#000"  />
            <Appbar.Header style={styles.topBar}>
                <Appbar.Content title="Quem Somos" />
              </Appbar.Header>
            <ScrollView>
            <Card>
                <Card.Title title="Nossa Missão" subtitle="" />
                <Card.Content>
                
                <Paragraph>Através da Plataforma Bela vizinhança ajudar moradores de rua situados na região da Bela vista. Incentivando moradores residenciais a criar uma conexão com moradores de rua, para entender quais suas necessidades reais. Assim minimizando suas dores. A Plataforma é de fácil acesso e simples funcionalidade, para facilitar quem quer ajudar o próximo.</Paragraph>
                </Card.Content>
                <Card.Cover source={require('../../../assets/Images/iniciativa-da-populacao.jpg')} />
                <Card.Actions>
                
                </Card.Actions>

                <Title>Somos a Ponte de Ligação entre Voluntários e Moradores de Rua</Title>
                <Paragraph>Os interessados em ajudar efetuam o cadastro em nossa plataforma se tornando Mediadores, que por sua vez fica responsável em cadastrar moradores de rua, necessidades dos moradores de rua registrados na plataforma.</Paragraph>
                <Paragraph>
                Moradores da região e interessados em ajudar podem efetuar as doações de forma direta, através de um mediador ou através de instituições parceiras com o projeto, dependendo da preferência do doador ou da melhor forma de receber a doação do morador de rua.
                </Paragraph>
            </Card>

            <View style={styles.listaPerfil}>


            <Card style={styles.cardPerfil}>
                <Card.Title title="Carla" subtitle="" />
                <Card.Content>
                </Card.Content>
                <Avatar.Image size={150} source={require('../../../assets/Images/time/Carla.jpg')} />
                <Card.Actions>
                <Button icon="github"></Button>
                <Button icon="linkedin"></Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardPerfil}>
                <Card.Title title="Guilherme" subtitle="" />
                <Card.Content>
                </Card.Content>
                <Avatar.Image size={150} source={require('../../../assets/Images/time/Guilherme.jpg')} />
                <Card.Actions>
                <Button style={styles.btnsPerfil} icon="github"></Button>
                <Button icon="linkedin"></Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardPerfil}>
                <Card.Title title="Rilvan" subtitle="" />
                <Card.Content>
                </Card.Content>
                <Avatar.Image size={150} source={require('../../../assets/Images/time/Rilvan.jpeg')} />
                <Card.Actions>
                <Button icon="github"></Button>
                <Button icon="linkedin"></Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardPerfil}>
                <Card.Title title="Roney" subtitle="" />
                <Card.Content>
                </Card.Content>
                <Avatar.Image size={150} source={require('../../../assets/Images/time/Roney.jpg')} />
                <Card.Actions>
                <Button icon="github"></Button>
                <Button icon="linkedin"></Button>
                </Card.Actions>
            </Card>
            <Card style={styles.cardPerfil}>
                <Card.Title title="Vitor" subtitle="" />
                <Card.Content>
                </Card.Content>
                <Avatar.Image size={150} source={require('../../../assets/Images/time/Vitor.jpeg')} />
                <Card.Actions>
                <Button icon="github"></Button>
                <Button icon="linkedin"></Button>
                </Card.Actions>
            </Card>
            </View>
            </ScrollView>

        </View>
        )
}

export default Sobre;