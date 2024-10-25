import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import Funcoes from "../../functions/funcoes";
import api from "../../services/api";
import C from "./style";
import { StyleSheet, View, Text } from "react-native";

export default () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [nomeremetente, setNomeRemetente] = useState("");
  const [statuscontato, setStatusContato] = useState("");
  const [nomecelula, setNomeCelula] = useState("");
  const [statuscelula, setStatusCelula] = useState("");
  const [descricao, setDescricao] = useState("");

  const [visitante, setVisitante] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "INFORMAÇÕES DO VISITANTE",
      headerTintColor: "#000",
    });
    getListaVisitante();
  }, []);

  const getListaVisitante = async () => {
    setVisitante([]);
    setLoading(true);
    const result = await api.listaVisitante(route.params.cod_pessoa);
    setLoading(false);
    if (result.error === "") {
      setVisitante(result.pessoa);
    } else {
      alert(result.error);
    }
  };

  return (
    <C.Area>

      {loading &&
        <C.AreaLoading>
          <C.LoadingIcon color="#000" size="large" />
          <C.TituloLoading>Carregando</C.TituloLoading>
        </C.AreaLoading>
      }

      {!loading && visitante.map((item, index) => (
        <C.Box>
          <C.HeaderBody>
            <C.Body>
              <C.Nome>{item.nome}</C.Nome>
            </C.Body>
            <C.Body>
              <C.Idade>Idade</C.Idade>
              <C.Campo>{item.idade} anos</C.Campo>
            </C.Body>
            <C.Body>
              <C.Label>Telefone</C.Label>
              <C.Campo selectable={true}>{item.telefone ? item.telefone : "Telefone não informado"}</C.Campo>
            </C.Body>
            <C.Body>
              <C.Label>Gênero</C.Label>
              <C.Campo>{item.sexo == "M" ? "Masculino" : "Feminino"}</C.Campo>
            </C.Body>
            <C.Body>
              <C.Label>Estado Civil</C.Label>
              <C.Campo>{Funcoes.estadoCivil(item.estado_civil)}</C.Campo>
            </C.Body>
            <C.Body>
              <C.Label>Endereço</C.Label>
              <C.Campo selectable={true}>
                {item.bairro ? item.bairro : "Não informado"}
              </C.Campo>
            </C.Body>
            <C.Body>
              <C.Label>Dia de culto</C.Label>
              <C.Campo selectable={true}>
                {item.cod_culto}
              </C.Campo>
            </C.Body>
            {item.campanha !== null || item.campanha !== "" &&
              <C.Body>
                <C.Label>Campanha</C.Label>
                <C.Campo selectable={true}>
                  {item.campanha}
                </C.Campo>
              </C.Body>
            }
            <C.Body>
              <C.Label>Membro de uma igreja</C.Label>
              <C.Campo selectable={true}>
                {item.membro_igreja === "S" ? "Sim" : "Não"}
              </C.Campo>
            </C.Body>
            {item.membro_igreja === "S" &&
              <C.Body>
                <C.Campo selectable={true}>
                  {item.igreja}
                </C.Campo>
              </C.Body>
            }
          </C.HeaderBody>
        </C.Box>
      ))}
    </C.Area>
  );
}
