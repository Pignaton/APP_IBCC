import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useStateValue } from "../contexts/StateContext";
import api from "../services/api";

const DrawerArea = styled.View`
  flex: 1;
  background-color: #FFF;
`;
const DrawerLogoArea = styled.View`
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const VContainer = styled.View`

`;
const DrawerLogo = styled.Image`
  width: 50px;
  height: 50px;
  margin: 20px auto 20px auto;
  padding: 25px;
`;
const DrawerIcon = styled.Image`
  width: 25px;
  height: 25px;
  color: #000;
`;
const TextoLogo = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  color: #000;
  font-weight: bold;
  font-family: Roboto-Bold;
`;
const DrawerScroller = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;
const ChangeUnitArea = styled.View`
  margin: 10px;
`;
const ChangeUnitButton = styled.TouchableOpacity`
  background-color: #7C04E4;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ChangeUnitButtonText = styled.Text`
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
`;
const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FooterInfo = styled.View``;
const FooterProfile = styled.Text`
  font-size: 15px;
  color: #000;
`;
const FooterUnitText = styled.Text`
  font-size: 15px;
  color: #000;
`;
const FooterUnitButton = styled.TouchableOpacity``;

const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #EEE;
  padding: 8px 0px 8px 0px;
`;
const MenuSquare = styled.View`
  width: 5px;
  height: 35px;
  margin-right: 20px;
  background-color: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const MenuButtonText = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  color: #000;
  font-weight: bold;
  font-family: Roboto-Bold;
`;

export default (props) => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const menus = [
    { title: "Lista de Visitantes", icon: require('../assets/list-right.png'), screen: "ListScreen" },
    { title: "Lista de Integrantes", icon: require('../assets/users-people.png'), screen: "IntegranteScreen" },
  ];

  const handleChangeUnit = async () => {
    await api.logout();
    navigation.reset({
      index: 1,
      routes: [{ name: "HomeScreen" }],
    });
  };

  return (
    <DrawerArea>
      <DrawerLogoArea>
        <VContainer>
          <TextoLogo>Meu Perfil</TextoLogo>
        </VContainer>
        <VContainer onPress={() => DrawerActions.closeDrawer()}>
          <DrawerLogo source={require("../assets/close-square-svgrepo-com.png")} resizeMode="stretch" />
        </VContainer>
      </DrawerLogoArea>
      <DrawerScroller>
        {menus.map((item, index) => (
          <MenuButton key={index} onPress={() => navigation.navigate(item.screen)}>
            <MenuSquare></MenuSquare>
            <DrawerIcon source={item.icon} resizeMode="stretch" />
            {/*<Icon name={item.icon} size={20} color={"#666E78"} />*/}
            <MenuButtonText>{item.title}</MenuButtonText>
          </MenuButton>
        ))}
      </DrawerScroller>
      <ChangeUnitArea>
        <ChangeUnitButton onPress={handleChangeUnit}>
          <ChangeUnitButtonText>Sair</ChangeUnitButtonText>
        </ChangeUnitButton>
      </ChangeUnitArea>
      <FooterArea>
        <FooterInfo>
          <FooterProfile>Olá, {context.user.user.nome}</FooterProfile>
          <FooterUnitText></FooterUnitText>
        </FooterInfo>
        <FooterUnitButton onPress={() => navigation.navigate("ConfiguracaoScreen")}>
          <Icon name="gear" size={24} color="#666E78" />
        </FooterUnitButton>
      </FooterArea>
    </DrawerArea>
  );
}
