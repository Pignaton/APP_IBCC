import React from "react";
import { useNavigation } from "@react-navigation/native";
import C from "./style";

export default () => {

  const navigation = useNavigation();

  const handleLoginButton = () => {
    navigation.navigate("LoginScreen");
  };

  const handleCadastroButton = () => {
    navigation.navigate("CadastroScreen");
  };

  return (
    <C.Container>
      <C.Logo />
      <C.Titulo>
        <C.TextoHome>
          <C.Paragrafo>Igreja Batista Comunidade </C.Paragrafo>
          <C.Span>de Cristo</C.Span>
        </C.TextoHome>
        <C.SubTexto>Junte-se à maior e mais tradicional comunidade evangelica da Vila Alpina!</C.SubTexto>
      </C.Titulo>

      <C.ButtonArea onPress={handleLoginButton}>
        <C.ButtonText>INICIAR SESSÃO</C.ButtonText>
      </C.ButtonArea>
      <C.ButtonAreaC onPress={handleCadastroButton}>
        <C.ButtonTextC>CADASTRAR VISITANTE</C.ButtonTextC>
      </C.ButtonAreaC>
    </C.Container>
  );
}

