import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "styled-components/native";
import { Portal, Paragraph, Button, Dialog, DefaultTheme, Card, Text, Badge } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import Funcoes from "../functions/funcoes";

const Div = styled.SafeAreaView``;
const Box = styled.TouchableOpacity``;

export default ({ data  }) => {

  const navigation = useNavigation();

  const [visibled, setVisibled] = React.useState(false);
  const showDialog = () => setVisibled(true);
  const hideDialog = () => setVisibled(false);
  const [codPessoaa, setCodPessoa] = useState(data.cod_pessoa);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
      error: "#f13a59",
      surface: "#000",
    },
  };

  const handleDeletaPessoa = () => {
    setCodPessoa(codPessoaa);
    showDialog();
  };

  const handleDeleta = () => {
    hideDialog();
  };

  /*const handleVerPessoa = () => {
    navigation.navigate("IndexScreen");
  };*/

  return (
    <Div>
      <Card
        theme={theme}
        style={[styles.surface]}
       >
        <Box key={data} data={data} onPress={() => {
          navigation.navigate("IndexScreen", {codPessoa : data.cod_pessoa},);
        }}>
          <Card.Title
            theme={theme}
            titleStyle={[styles.paragrafo]}
            subtitleStyle={[styles.paragrafo]}
            title={data.nome}
            subtitle={data.created_at}
            left={(props) => (
              <Icon name="newspaper-o" size={30} color="#7C04E4" />
            )}
          />
          <Card.Content>
            <Paragraph style={[styles.paragrafo]}> <Text style={[styles.titulo]}>Idade: </Text> {data.idade + " anos "} </Paragraph>
            <Paragraph style={[styles.paragrafo]}> <Text style={[styles.titulo]}>Gênero: </Text> {Funcoes.estadoCivil(data.estado_civil)} </Paragraph>
          </Card.Content>
          <Card.Actions>
            {/*<Badge style={[styles.content]}>Contato não Feito</Badge>
             <Button textColor="#000" mode="outlined" onPress={() => handleDeletaPessoa(1)}>Deletar</Button>*/}
          </Card.Actions>
        </Box>
      </Card>
      <Portal>
        <Dialog visible={visibled} onDismiss={hideDialog}>
          <Dialog.Title>Atenção!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Essa ação não poderá ser revertida {data.cod_pessoa}
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleDeleta}>Deletar</Button>
            <Button onPress={hideDialog}>Cancelar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Div>
  );
};

const styles = StyleSheet.create({
  surface: {
    margin: 10,
    elevation: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FFF",
  },
  paragrafo: {
    color: "#000",
  },
  titulo: {
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
});

