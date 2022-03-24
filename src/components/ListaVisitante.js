import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Menu, Portal, Paragraph, Button, Dialog, Divider, DefaultTheme  } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Funcoes from "../functions/funcoes";

const Div = styled.SafeAreaView``;
const Box = styled.TouchableOpacity`
  background-color: #FFF;
  border-width: 2px;
  border-color: #E8E9ED;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 15px;
`;
const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoArea = styled.View`
  margin-left: 15px;
  flex: 1;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
`;
const Date = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9C9DB9;
`;
const ButtonBar = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
const Body = styled.Text`
  font-size: 15px;
  color: #000;
  margin: 15px 0;

`;
export default ({ data }) => {

  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [visibled, setVisibled] = React.useState(false);
  const showDialog = () => setVisibled(true);
  const hideDialog = () => setVisibled(false);
  const [codPessoa, setCodPessoa] = useState(data.cod_pessoa);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
      background: '#FFF',
    },
  };

  const handleDeletaPessoa = () => {
    setCodPessoa(codPessoa);
    closeMenu();
    showDialog();
  };

  const handleDeleta = () => {
    hideDialog();
  };

  const handleVerPessoa = () => {
    navigation.navigate("IndexScreen", { cod_pessoa: data.cod_pessoa });
  };

  return (
    <Div>
      <Box key={data} onPress={handleVerPessoa}>
        <HeaderArea>
          <Icon name="newspaper-o" size={30} color="#8863E7"></Icon>
          <InfoArea>
            <Title>{data.nome}</Title>
            <Date>{data.created_at}</Date>
          </InfoArea>
          <ButtonBar>
          <Menu
            theme={theme}
            mode={'light'}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Icon
                name="bars"
                size={25}
                color="#000"
                onPress={() => openMenu(true)}
              />
            }>
            <Menu.Item
              icon="eye"
              onPress={() => handleVerPessoa(data.cod_pessoa)}
              title="Ver Visitante"
              style={{ color: '#ff0000' }}
              onDismiss={closeMenu}
            />
            <Menu.Item icon="pen" onPress={() => {}} title="Editar" />
            <Divider />
            <Menu.Item
              icon="trash-can"
              onPress={() => handleDeletaPessoa(data.cod_pessoa)}
              title="Deletar"
              style={{ color: '#ff0000' }}
              onDismiss={closeMenu}
            />
          </Menu>
          </ButtonBar>
        </HeaderArea>
        <Body>
          {data.idade + " anos - " + Funcoes.estadoCivil(data.estado_civil)}
        </Body>
      </Box>
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

