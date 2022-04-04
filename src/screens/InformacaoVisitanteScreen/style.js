import styled from "styled-components/native";

export default {
  Area: styled.SafeAreaView`
    flex: 1;
  `,
  BoxArea: styled.View`
    background-color: #0D1E52;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-width: 1px;
    border-color: #E8E9ED;
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
    color: #FFF;
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
};
