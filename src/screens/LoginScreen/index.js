import React, { useEffect, useState } from 'react';
//import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import C from './style';
import { useStateValue } from '../../contexts/StateContext';
import api from '../../services/api';
import { Checkbox, TextInput, DefaultTheme, Divider } from 'react-native-paper';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default () => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  });

  const theme = {
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: "#7c04e4",
      background: "#FFF",
      accent: "#f1c40f",
    },
  };

  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleRecuperaSenhaButton = () => {
    navigation.navigate("RecuperaSenhaScreen");
  };

  const handleCriaContaButton = () => {
    navigation.navigate("CriaContaScreen");
  };

  const handleLoginButton = async () => {
    if (email && senha) {
      let result = await api.login(email, senha);

      if (result.error === "") {

        dispatch({ type: "setToken", payload: { token: result.token } });
        dispatch({ type: "setUser", payload: { user: result.user } });

        navigation.reset({
          index: 1,
          routes: [{ name: "MainDrawer" }],
        });
      } else {
        setMensagem(false);
      }
    } else {
      alert("Preencha os campos Email e Senha");
    }
  };

  showMessage({ type: "danger", icon: "danger", message: "Ops, problema.", description: "Email/Senha inválido." });

  return (
    <C.Container>
      {mensagem !== true && <FlashMessage position="bottom" autoHide={false} />}
      <C.Logo source={require('../../assets/logo_login.jpg')} resizeMode="contain" />
      <C.Card>
        <TextInput
          mode="outlined"
          label="Email"
          keyBoardType="email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          theme={theme}
          style={{ marginBottom: 15 }}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(t) => setSenha(t)}
          theme={theme}
        />
        <C.Content>
          {/*<C.BoxCheckBox>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <C.TextoCheckbox>Lembrar de mim</C.TextoCheckbox>
        </C.BoxCheckBox>*/}
          <C.Senha onPress={handleRecuperaSenhaButton}>Esqueceu a senha?</C.Senha>
        </C.Content>
        <C.ButtonArea onPress={handleLoginButton}>
          <C.ButtonText>ENTRAR</C.ButtonText>
        </C.ButtonArea>
        <Divider />
        <C.BoxTextoArea>
          <C.TextoArea>Não tem conta ainda?</C.TextoArea>
        </C.BoxTextoArea>
        <C.BotaoCriarConta onPress={handleCriaContaButton}>
          <C.TextoCriarConta>CRIAR NOVA CONTA</C.TextoCriarConta>
        </C.BotaoCriarConta>
      </C.Card>
    </C.Container>
  );
}

