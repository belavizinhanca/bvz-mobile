import React from 'react';
import { View, StatusBar, Text, FlatList, VirtualizedList, ScrollView } from 'react-native';
// import { Appbar, Avatar, List } from 'react-native-paper';
import DATA from './DATA'
import { ListItem, Avatar } from 'react-native-elements'
import list from './list';
import styles from './styles';

function Doacao() {


  const list = [
    {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"Josiel",
      avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
     {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"Rafael",
      avatar_url: 'http://f.i.uol.com.br/folha/cotidiano/images/17114288.jpeg',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
       {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"João",
      avatar_url: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2019/10/design-sem-nome-66-768x402.png',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
       {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"Amilton",
      avatar_url: 'https://jornaldacic.com.br/wp-content/uploads/2018/07/IMG_0583-1.png',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
      {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"Rita",
      avatar_url: 'https://misterfreitas.files.wordpress.com/2013/03/moradora-de-rua.jpg',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
      {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"André",
      avatar_url: 'https://mariliaescobar.files.wordpress.com/2010/11/21364347.jpg',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
      {
      _id:{"$oid":"6037e51f771c850015816c8b"},
      nome:"Margarida",
      avatar_url: 'http://s2.glbimg.com/_olS2RToMopvUnEL2u7rorpqWb4=/290x217/s2.glbimg.com/aMFftrLzr-qzpOysIIjDygqqnt4=/620x465/s.glbimg.com/jo/g1/f/original/2013/10/07/img_72971.jpg',
      perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
      demanda:"Blusa",
      },
      {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Everaldo",
        avatar_url: 'https://cachorroblog.files.wordpress.com/2009/08/horacio01.jpg',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
         {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Antonio",
        avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
         {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Genivaldo",
        avatar_url: 'http://s2.glbimg.com/d1Q82eHGahW0a5xw52ZJ-Q4BhXM=/e.glbimg.com/og/ed/f/original/2013/12/07/06982130700.jpg',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
        {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Guilherme",
        avatar_url: 'https://ogimg.infoglobo.com.br/in/24871474-81e-56e/FT1086A/652/x91483777_RIRio-de-Janeiro-RJ-05-02-2021O-morador-de-rua-Guilherme-Lucio-de-Oliveira-tem-ch.jpg.pagespeed.ic.FxhhGB8qF_.jpg',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
        {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Josiel",
        avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
        {
        _id:{"$oid":"6037e51f771c850015816c8b"},
        nome:"Josiel",
        avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
        perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
        demanda:"Blusa",
        },
        {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
           {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
           {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
          {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
          {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
          {
          _id:{"$oid":"6037e51f771c850015816c8b"},
          nome:"Josiel",
          avatar_url: 'https://voaa-app.s3-sa-east-1.amazonaws.com/capa_arno.png',
          perfil:"Mora nas ruas de Bela Vista - SP ha dezoito anos",
          demanda:"Blusa",
          },
   ]
  

  return(
  <ScrollView>
<View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.demanda}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
</ScrollView>
        )
}

export default Doacao;

  
  // const Item = ({ avatar, titulo, descricao  }) => (
  //   <View style={styles.item}>
  //     <Avatar.Image size={56} source={avatar} />
  //     <View style={styles.textoLista}>
  //     <Text style={styles.titulo}>{titulo}</Text>
  //     <Text style={styles.descricao}>{descricao}</Text>
  //   </View>
  //   </View>
      
   
  // );

  //   const renderItem = ({ item }) => (
  //     <Item titulo={item.titulo} src={item.avatar} descricao={item.descricao}
  //     left={props => <List.Icon {...props} icon="folder" />} /> );






      // <View style={styles.container}>
        //     <StatusBar animated={true} backgroundColor="#232323"  />
        //       <Appbar.Header style={styles.header}>
        //         <Appbar.Content title="Faça uma Doação" subtitle="Encontre uma causa" />
        //       </Appbar.Header>
            
        //       <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/> 
                       
        // </View>