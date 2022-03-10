import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLoginButton = async () => {
    if (email && senha) {
      let result = await api.login(email, senha);
      //alert(result);
      if (result.error === '') {

        dispatch({ type: "setToken", payload: { token: result.token } });
        dispatch({ type: "setUser", payload: { user: result.user } });

        navigation.reset({
          index: 1,
          routes: [{ name: 'MainDrawer' }],
        });
      } else {
        alert(result.error);
      }
    } else {
      alert('Preencha os campos');
    }
  };

  return (
    <C.Container>
      <C.Logo
        source={{}}
        resizeMode="contain"
      />
      <C.Field
        placeholder="Digite seu Email"
        keyBoardType="email"
        value={email}
        onChangeText={t => setEmail(t)}
      />
      <C.Field
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={t => setSenha(t)}
      />
      <C.ButtonArea onPress={handleLoginButton}>
        <C.ButtonText>ENTRAR</C.ButtonText>
      </C.ButtonArea>
    </C.Container>
  );
}
