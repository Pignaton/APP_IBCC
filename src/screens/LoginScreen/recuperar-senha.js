import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import C from './style';
import { DefaultTheme, TextInput } from 'react-native-paper';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default () => {

  const navigation = useNavigation();

  const theme = {
    roundness: 10,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

  const [email, setEmail] = useState('');
  const [userError, setUserError] = useState(false);

  showMessage({ type: 'danger', icon: 'danger', message: "Ops, problema.", description: 'Email não encontrado.',duration: false  });

  const handleLembrouSenha = () => {
    navigation.navigate('LoginScreen');
  }
  return (
    <C.Container>
      <C.Logo />
      <FlashMessage position="bottom"  />
      <C.Titulo>
        <C.TextoLogin style={{ fontFamily: 'Fredoka-Bold' }}>
          Precisa de ajuda com sua senha?
        </C.TextoLogin>
        <C.Texto style={styles.font}>Informe o e-mail  de Log in e nós ajudaremos a criar uma nova senha. </C.Texto>
      </C.Titulo>
      <TextInput
        mode="outlined"
        label="Email"
        keyBoardType={"email"}
        value={email}
        onChangeText={(t) => setEmail(t)}
        theme={theme}
        error={userError}
      />
      <C.SenhaArea>
        <C.Senha style={styles.font} onPress={handleLembrouSenha}>Lembrou da senha?</C.Senha>
      </C.SenhaArea>
      <C.ButtonArea onPress={() => setUserError((value) => !value)}>
        <C.ButtonText style={styles.font}>ENVIAR LINK</C.ButtonText>
      </C.ButtonArea>
    </C.Container>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Roboto-Bold',
  },
});
