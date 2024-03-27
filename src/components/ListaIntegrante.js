import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {Surface, Appbar, Avatar, Card, TouchableRipple, Text } from "react-native-paper";
import Funcoes from "../functions/funcoes";

export default ({ person }) => {
  const navigation = useNavigation();
  const [dados, setDados] = useState(person.cod_integrante);

  const handleDeleta = () => {
    alert(dados);
  };

  const handleVerIntegrante = () => {
    navigation.navigate("InformacaoIntegrante", { cod_integrante: person.cod_integrante });
  };

  function status(param) {
    let resp;
    if (param === "A") {
      resp = "Ativado";
    } else if (param === "I") {
      resp = "Inativado";
    } else {
      resp = "Bloqueado";
    }
    return resp;
  }

  const badge = {
    //backgroundColor: person.status === "A" ? "#bce2be" : person.status === "I" ? "#ffd59f" : "#fcd3d0",
    color: person.status === "A" ? "#339537" : person.status === "I" ? "#c87000" : "#f61200",
  };

  return (
    <Surface style={styles.surface}>
      <TouchableRipple onPress={handleVerIntegrante}>
        <Card.Title
          title={person.nome}
          subtitle={
            <Text >{person.idade + " anos " + Funcoes.estadoCivil(person.estado_civil) + " "}
              <Text  style={badge}>{status(person.status)}</Text>
            </Text>
          }
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="account"
              style={{
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#ecf0f1",
              }}
            />
          )}
          right={(props) => (
            <Appbar.Action {...props} icon="delete-outline" color="#000" onPress={handleDeleta}/>
          )}
        />
      </TouchableRipple>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
  },
});


