import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ContatoScreen(props) {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contato</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  
} 