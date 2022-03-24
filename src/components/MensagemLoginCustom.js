import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DialogModal() {
  return (
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <View style={styles.containerComponent}>
        <Icon name="close" size={25} color="#9f3a38" />
        <Text style={styles.textMessageConnection}>Email/Senha inválido.</Text>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  containerComponent: {
    marginTop: 40,
    width: '100%',
    height: 50,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F7',
    borderRadius: 2,
    borderWidth:  1,
    borderStyle:'solid',
    borderColor:'#9f3a38'
  },
  textMessageConnection: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9f3a38',
    marginLeft: 10,
  },
});
