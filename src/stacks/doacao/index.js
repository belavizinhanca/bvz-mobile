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