import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import C from './style';
import { DefaultTheme, TextInput } from 'react-native-paper';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default () => {

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
        keyBoardType="email"
        left={<TextInput.Icon name="email" />}
        value={email}
        onChangeText={(t) => setEmail(t)}
        theme={theme}
        error={userError}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 15,
        }}>
        <C.Senha style={styles.font}>Lembrou da senha?</C.Senha>
      </View>
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
