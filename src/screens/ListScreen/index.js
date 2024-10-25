import React, {useEffect,useState} from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Provider,Searchbar,DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import C from "./style";
import api from '../../services/api';
import Lista from '../../components/ListaVisitante';


export default () => {
  const navigation = useNavigation();
  const [visitantes, setListaVisitantes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");
  const onChangeBusca = (query) => setBusca(query);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: "LISTA DE VISITANTE",
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
  const theme = {
    ...DefaultTheme,
    roundness: 5,
  };
  return (
    <Provider>
      <C.Container>
        <Searchbar
          style={[styles.pesquisa]}
          placeholder="Pesquisar por nome"
          onChangeText={onChangeBusca}
          value={busca}
          icon={() => <Icon name="search" color="#000" size={20} />}
        />
        {!loading && visitantes.length === 0 &&
          <C.NoListaArea>
            <C.NoListaTexto>Não há cadastro realizados.</C.NoListaTexto>
          </C.NoListaArea>
        }
        <C.List onRefresh={getListaVisitantes} refreshing={loading} data={visitantes}
                renderItem={({ item }) => <Lista data={item} />}
                keyExtractor={(item) => item.cod_pessoa.toString()
        } />
      </C.Container>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#7C04E4',
  },
  pesquisa: {
    margin: 10,
    backgroundColor: '#FFF',
    color: '#000',
  },
  boxFilter: {
    flex: 1,
  },
  tituloFilter: {
    margin: 10,
    fontSize: 15,
    color: '#000',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  textoFilter: {
    color: '#000',
    fontSize: 17,
    alignSelf: 'center',
  },
  filtrar: {
    backgroundColor: '#7C04E4',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
  },
  surface: {
    elevation: 2,
  },
});

