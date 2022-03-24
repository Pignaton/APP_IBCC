import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  S,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Funcoes from "../../functions/funcoes";

export default function App() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Informações do Visitante",
      headerTintColor: '#000',
    });
  });

  const json = {
    cod_pessoa: 1,
    cod_culto: 4,
    cod_campanha: null,
    nome: 'Kaleb Pignaton',
    idade: 26,
    email: null,
    telefone: '11974963195',
    sexo: 'M',
    estado_civil: 'N',
    created_at: '2022-03-14 10:11:33',
    cod_endereco: 1,
    cep: '03283060',
    endereco: 'Rua Antônio Pires de Campos',
    bairro: 'Vila Ema',
    numero: 140,
    complemento: 'apt 507',
    cidade: 'São Paulo',
    estado: 'SP',
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.boxArea}>
        <View style={styles.headerArea}>
          <Icon name="user-circle-o" size={40} color="#FFF" />
          <View style={styles.infoArea}>
            <Text style={styles.nome}>{json.nome}</Text>
            <Text style={styles.idade}>{json.idade} anos</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.headerBody}>
          <View style={styles.body}>
            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.campo} selectable={true}>{json.telefone}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.campo} selectable={true}>
              {json.email ? json.email : 'Email não informado'}
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>Genero</Text>
            <Text style={styles.campo}>{json.sexo == 'M'? 'Masculino':'Feminino'}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>Estado Civil</Text>
            <Text style={styles.campo}>{Funcoes.estadoCivil(json.estado_civil)}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.label}>Endereço</Text>
          <Text style={styles.campo} selectable={true}>
            {json.endereco +
              ', ' +
              json.numero +
              ' - ' +
              json.bairro +
              ', ' +
              json.cidade +
              ' - ' +
              json.estado}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxArea: {
    backgroundColor: '#0D1E52',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E9ED',
    padding: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E9ED',
    padding: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  headerArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArea: {
    marginLeft: 15,
    flex: 1,
  },
  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerBody: {},
  body: {
    paddingTop: 10,
  },
  campo: {
    backgroundColor: '#FFF',
    fontSize: 15,
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#9c9db9',
  },
  label: {
    marginTop: 15,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9c9db9',
  },
  footerArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  likeText: {
    marginLeft: 5,
    fontSize: 13,
    color: '#9C9DB9',
  },
});
