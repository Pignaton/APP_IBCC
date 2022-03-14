import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { Provider as PaperProvider } from 'react-native-paper';
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";

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
    setLoading(true);
    const result = await api.listaVisitantes();
    setLoading(false);
    if (result.error === "") {
      setListaVisitantes(result.pessoas);
    } else {
      alert(result.error);
    }
  };

  const numberOfItemsPerPageList = [10,10];
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, visitantes.length);

  useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);


  return (
    <C.Container>
      <C.Scroller>
        {loading &&
          <C.LoadingIcon color="#8863E6" size="large" />
        }
        {!loading && visitantes.length === 0 &&
          <C.NoListaArea>
            <C.NoListaTexto>Não há cadastro realizados.</C.NoListaTexto>
          </C.NoListaArea>
        }
        <PaperProvider>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nome</DataTable.Title>
              <DataTable.Title>Idade</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
            </DataTable.Header>
            {visitantes.slice(
              page * numberOfItemsPerPage,
              page * numberOfItemsPerPage + numberOfItemsPerPage
            )
              .map((item, key) => (
              <DataTable.Row key={key}>
                <DataTable.Cell>{item.nome}</DataTable.Cell>
                <DataTable.Cell>{item.idade}</DataTable.Cell>
                <DataTable.Cell>{item.email}</DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(visitantes.length / numberOfItemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${visitantes.length}`}
              showFastPaginationControls
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={numberOfItemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              selectPageDropdownLabel={'Linhas por página'}
            />
          </DataTable>
          </PaperProvider>
      </C.Scroller>
    </C.Container>
  );
};

