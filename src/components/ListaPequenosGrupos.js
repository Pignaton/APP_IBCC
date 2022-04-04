import React, { useMemo, useRef, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import styled from "styled-components/native";
import Funcao from "../functions/funcoes";

const BotaoClose = styled.TouchableHighlight`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-color: transparent;
  background-color: #CCC;
  margin-right: 15px;
`;
const Box = styled.TouchableOpacity`
  background-color: #FFF;
  border-radius: 10px;
  border-width: 2px;
  border-color: #E8E9ED;
  padding: 15px;
  margin: 10px;
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
  color: #9c9db9;
`;
const HeaderSheet = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const HeaderSheetBox = styled.View`
  margin-left: 25px;
`;
const Body = styled.View`
    align-items: center;
    justify-content: center;
    padding: 15px;
`;
const Texto = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9c9db9;
  padding: 10px;
`;


export default ({ data }) => {
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ["5%", "40%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  return (
    <>
      <Box
        onPress={handlePresentModalPress}
        key={data}>
        <HeaderArea>
          <Icon name="users" size={15} color="#8863e7" />
          <InfoArea>
            <Title>{data.nome_grupo}</Title>
            <Date>{data.qtd} integrantes</Date>
          </InfoArea>
        </HeaderArea>
      </Box>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <HeaderSheet>
          <HeaderSheetBox>
            <Title>{data.nome_grupo}</Title>
            <Date>{data.nom_lider}</Date>
          </HeaderSheetBox>
          <BotaoClose>
            <Icon
              name="times"
              size={20}
              color="#fff"
              onPress={handleDismissPress}
            />
          </BotaoClose>
        </HeaderSheet>
        <Body>
          <Texto>Grupo de {Funcao.TipoDeGrupo(data.tipo_pequeno_grupo)}</Texto>
          <Texto>Pequeno grupo de {Funcao.TipoDeGrupoGenero(data.pequeno_grupo_genero)}</Texto>
          <Texto>{data.qtd} integrantes</Texto>
        </Body>
      </BottomSheetModal>
    </>
  );
};
