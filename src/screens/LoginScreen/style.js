import styled from "styled-components/native";

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #FFF; //#F5F6FA
  `,
  Logo: styled.Image`
    width: 250px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  `,

  Titulo: styled.View`
    justify-content: space-around;
    align-items: flex-start;
    font-size: 18px;
    margin: 10px;
    padding-bottom: 10px;
    color: #000; //#000
    font-weight: bold;
    background-color: transparent;
  `,
  TextoLogin: styled.Text`
    color:#55A1DC;
    margin-bottom:5px;
    font-size:25px;
    font-family:Fredoka-Bold;
  `,
  Texto: styled.Text`
    color: #000;
    font-family: Roboto-Bold;
  `,
  Field: styled.TextInput.attrs({
    placeholderTextColor: "#BDBDBD",
  })`
    border-width: 1px;
    border-color: #BDBDBD;
    /*background-color:#F5F6FA;*/
    background-color: #F5F5F5;
    border-radius: 5px;
    color:#000;
    font-size:15px;
    margin-bottom:15px;
    padding: 15px;
  `,
  View: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15px;
  `,
  BoxCheckBox: styled.View`
  flex-direction: row;
  `,
  TextoCheckbox: styled.Text`
    margin-top: 8px;
    color:#000;
  `,
  Senha: styled.Text`
    margin-top:8px;
    color:#55A1DC;
    font-family: Roboto-Bold;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #55A1DC;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ButtonText: styled.Text`
    color:#FFF;
    font-size:15px;
    font-weight: bold;
    font-family:Roboto-Bold;
  `,
  BoxTextoArea: styled.View`
    align-items: center;
    justify-content: center;
    margin: 15px;
  `,
  TextoArea: styled.Text`
    color:#000;
  `,
  BotaoCriarConta: styled.TouchableOpacity`
    border-width: 1px;
    border-color: #55A1DC;
    color:#55A1DC;
    background-color: #FFF;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
  `,
  TextoCriarConta: styled.Text`
    color:#55A1DC;
    font-size:15px;
    font-weight: bold;
    font-family: Roboto-Bold;
  `,
  SenhaArea: styled.View`
    padding-bottom: 15px;
    margin-top: 8px;
  `,
};
