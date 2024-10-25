import styled from "styled-components/native";

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #7c04e4;
  `,
  ContainerRP: styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
    font-family: Roboto-Bold;
  `,
  Card: styled.View`
    padding: 20px;
    flex: 1;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #FFF;
  `,
  Logo: styled.Image`
    width: 280px;
    height: 220px;
    margin: 20px auto 20px auto;
    padding: 25px;
  `,
  Titulo: styled.View`
    justify-content: space-around;
    align-items: flex-start;
    font-size: 18px;
    margin: 10px;
    padding-bottom: 10px;
    color: #000; 
    font-weight: bold;
    background-color: transparent;
  `,
  TextoLogin: styled.Text`
    color: #7C04E4;
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: bold;
  `,
  Texto: styled.Text`
    color: #000;
  `,
  Field: styled.TextInput.attrs({
    placeholderTextColor: "#BDBDBD",
  })`
    border-width: 1px;
    border-color: #BDBDBD;
    background-color: #F5F5F5;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    margin-bottom: 15px;
    padding: 15px;
  `,
  Content: styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-bottom: 15px;
  `,
  BoxCheckBox: styled.View`
    flex-direction: row;
  `,
  TextoCheckbox: styled.Text`
    margin-top: 8px;
    color: #000;
  `,
  Senha: styled.Text`
    color: #9c37ec;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #7c04e4;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ButtonText: styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
  `,
  BoxTextoArea: styled.View`
    align-items: center;
    justify-content: center;
    margin: 15px;
  `,
  TextoArea: styled.Text`
    color: #000;
  `,
  BotaoCriarConta: styled.TouchableOpacity`
    border-width: 1px;
    border-color: #7c04e4;
    color: #7c04e4;
    background-color: #FFF;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
  `,
  TextoCriarConta: styled.Text`
    color: #9c37ec;
    font-size: 15px;
    font-weight: bold;
  `,
  SenhaArea: styled.View`
    padding-bottom: 15px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
  `,
  Text: styled.Text`
    color: #000;
    font-size: 15px;
  `,
  Linha: styled.View`
    border-color: #F5F6FA;
    box-sizing: border-box;
    width: 100%;
    border-width: 0.7px;
    margin-top: 25px;
  `,
};
