import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import C from "./style";
import { DefaultTheme, TextInput } from "react-native-paper";
import FlashMessage, { showMessage } from "react-native-flash-message";
//import { useEffect } from "@types/react";

export default () => {

  const navigation = useNavigation();

  const theme = {
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: "#7c04e4",
      background: "#FFF",
      accent: "#f1c40f",
    },
  };

  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState(false);

  showMessage({
    type: "danger",
    icon: "danger",
    message: "Ops, problema.",
    description: "Email não encontrado.",
    duration: false,
  });

  const handleLembrouSenha = () => {
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#FFF', fontFamily: 'Roboto-Bold', borderColor: '#000', borderWidth: 0.7, boxSizing: 'border-box' },
      headerTitle: "",
    });
  }, []);

  return (
    <C.ContainerRP>
      <C.Card>
        <FlashMessage position="bottom" />
        <C.Titulo>
          <C.TextoLogin>
            Esqueceu sua senha
          </C.TextoLogin>
          <C.Texto>Digite seu e-mail para receber um e-mail para redefinir sua senha. </C.Texto>
        </C.Titulo>
        <TextInput
          mode="outlined"
          label="Email"
          keyBoardType={"email"}
          value={email}
          onChangeText={(t) => setEmail(t)}
          theme={theme}
          style={{ marginBottom: 15 }}
          error={userError}
        />
        <C.ButtonArea onPress={() => setUserError((value) => !value)}>
          <C.ButtonText>ENVIAR LINK</C.ButtonText>
        </C.ButtonArea>
      </C.Card>
      <C.SenhaArea>
        <C.Text>Já tem conta? </C.Text><C.Senha onPress={handleLembrouSenha}>Conecte-se</C.Senha>
      </C.SenhaArea>
    </C.ContainerRP>
  );
};
