import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Funcoes from "../../functions/funcoes";
import C from './style';

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Informações do Visitante",
      headerTintColor: '#000',
    });
  });

  // dados para teste
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
    <C.Area>
      <C.BoxArea>
        <C.HeaderArea>
          <Icon name="user-circle-o" size={40} color="#FFF" />
          <C.InfoArea>
            <C.Nome>{json.nome}</C.Nome>
            <C.Idade>{json.idade} anos</C.Idade>
          </C.InfoArea>
        </C.HeaderArea>
      </C.BoxArea>
      <C.Box>
        <C.HeaderBody>
          <C.Body>
            <C.Label>Telefone</C.Label>
            <C.Campo selectable={true}>{json.telefone}</C.Campo>
          </C.Body>
          <C.Body>
            <C.Label>Email</C.Label>
            <C.Campo selectable={true}>
              {json.email ? json.email : 'Email não informado'}
            </C.Campo>
          </C.Body>
          <C.Body>
            <C.Label>Genero</C.Label>
            <C.Campo>{json.sexo == 'M'? 'Masculino':'Feminino'}</C.Campo>
          </C.Body>
          <C.Body>
            <C.Label>Estado Civil</C.Label>
            <C.Campo>{Funcoes.estadoCivil(json.estado_civil)}</C.Campo>
          </C.Body>
        </C.HeaderBody>
        <C.Body>
          <C.Label>Endereço</C.Label>
          <C.Campo selectable={true}>
            {json.endereco +
              ', ' +
              json.numero +
              ' - ' +
              json.bairro +
              ', ' +
              json.cidade +
              ' - ' +
              json.estado}
          </C.Campo>
        </C.Body>
      </C.Box>
    </C.Area>
  );
}
