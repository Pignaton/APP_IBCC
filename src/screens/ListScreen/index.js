import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";
import Lista from "../../components/ListaVisitante";

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [visitantes, setListaVisitantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Lista de Vistantes",
    });
    getListaVisitantes();
  }, []);

  const getListaVisitantes = async () => {
    setListaVisitantes([]);
    setLoading(true);
    const result = await api.listaVisitantes();
    setLoading(false);
    if (result.error === "") {
      setListaVisitantes(result.pessoas);
    } else {
      alert(result.error);
    }
  };

  return (
    <Provider>
      <C.Container>
        {!loading && visitantes.length === 0 &&
          <C.NoListaArea>
            <C.NoListaTexto>Não há cadastro realizados.</C.NoListaTexto>
          </C.NoListaArea>
        }
        <C.List onRefresh={getListaVisitantes} refreshing={loading} data={visitantes}
                renderItem={({ item }) => <Lista data={item} />}
                keyExtractor={(item) => item.cod_pessoa.toString()} />
      </C.Container>
    </Provider>
  );
};

