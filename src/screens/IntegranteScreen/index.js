import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DefaultTheme, Provider } from "react-native-paper";
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";
import Lista from "../../components/ListaIntegrante";

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [integrantess, setListaIntegrantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Lista de Integrantes",
    });
    getListaIntegrantes();
  }, []);

  const getListaIntegrantes = async () => {
    setListaIntegrantes([]);
    setLoading(true);
    const result = await api.listaIntegrantes();
    setLoading(false);
    if (result.error === "") {
      setListaIntegrantes(result.integrantes);
    } else {
      alert(result.error);
    }
  };

  const theme = {
    ...DefaultTheme,
  };

  return (
    <Provider theme={theme}>
      <C.Container>
        {!loading && integrantess.length === 0 &&
          <C.NoListaArea>
            <C.NoListaTexto>Não há cadastro realizados.</C.NoListaTexto>
          </C.NoListaArea>
        }
        <C.List onRefresh={getListaIntegrantes} refreshing={loading} data={integrantess}
                renderItem={({ item }) => <Lista person={item} />}
                keyExtractor={(item) => item.cod_integrante.toString()} />
      </C.Container>
    </Provider>
  );
};


