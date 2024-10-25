import styled from "styled-components/native";

export default {

  LoadingIcon: styled.ActivityIndicator`
    flex: 1;
  `,

  Area: styled.SafeAreaView`
    flex: 1;
    padding: 15px;
    background-color: #FFF;
    font-family: Roboto-Bold;
  `,
  BoxArea: styled.View`
    background-color: #FFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-width: 1px;
    border-color: #FFF;
    padding: 15px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  `,
  HeaderArea: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  InfoArea: styled.View`
    margin-left: 15px;
    flex: 1;
  `,
  Nome: styled.Text`
    font-size: 17px;
    font-weight: bold;
  `,
  Idade: styled.Text``,
  Box: styled.View`
    background-color: #FFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-width: 1px;
    border-color: #E8E9ED;
    padding: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  `,
  HeaderBody: styled.View``,
  Body: styled.View`
    padding-top: 10px;
  `,
  Campo: styled.Text`
    background-color: #FFF;
    font-size: 15px;
    color: #000;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-color: #9c9db9;
  `,
  Label: styled.Text`
    margin-top: 15px;
    font-size: 12px;
    font-weight: bold;
    color: #9c9db9;
  `,

  TextArea: styled.TextInput`
    border-width: 1;
    margin-bottom: 20;
    background-color: #FFF;
    border-radius: 8;
    padding: 10;
  `,

  Texto: styled.Text`
    color: #A7A7A7;
    font-family: Roboto-Bold;
  `,

  //Style da página MapsPequenosGrupo

  Container: styled.View`
    flex: 1;
  `,
  ContentContainer: styled.View`
    padding: 1px;
    background-color: #FFF;
  `,
  Titulo: styled.Text`
    font-size: 1px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 5px;
    color: #000;
  `,
  TituloLoading: styled.Text`
    font-size: 13px;
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 5px;
    color: #000;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #7c04e4;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 15px;
  `,
  ButtonText: styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
  `,

  Erro: styled.Text`
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #F08585;
    padding-bottom: 30px;
    font-size: 12px;
  `,
  ScrollView: styled.ScrollView`
    background-color: #FFF;
  `,

  AreaLoading: styled.View`
    padding: 30px;
  `,
};
