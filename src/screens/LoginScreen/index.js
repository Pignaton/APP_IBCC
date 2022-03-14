import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import C from "./style";
import { useStateValue } from "../../contexts/StateContext";
import api from "../../services/api";
import LinearGradient from "react-native-linear-gradient";

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLoginButton = async () => {
    if (email && senha) {
      let result = await api.login(email, senha);
      //alert(result);
      if (result.error === "") {

        dispatch({ type: "setToken", payload: { token: result.token } });
        dispatch({ type: "setUser", payload: { user: result.user } });

        navigation.reset({
          index: 1,
          routes: [{ name: "MainDrawer" }],
        });
      } else {
        alert(result.error);
      }
    } else {
      alert("Preencha os campos");
    }
  };

  const handleCadastroButton = () => {
    navigation.navigate({
      index: 1,
      routes: [{ name: "RegistroScreen" }],
    });
  };

  return (
    <C.Container>
      <LinearGradient colors={["#FFFFFF", "#FFFFFF"]} style={styles.linearGradient}>

        <C.Logo
          source={{}}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>
          Igreja Batista Comunidade de Cristo
        </Text>
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
        <C.ButtonArea onPress={handleCadastroButton}>
          <C.ButtonText>CADASTRAR VISITANTE</C.ButtonText>
        </C.ButtonArea>
      </LinearGradient>
    </C.Container>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    paddingBottom:10,
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});
