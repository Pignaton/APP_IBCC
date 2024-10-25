import styled from "styled-components/native";

export default {
  ScrollView: styled.ScrollView``,
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #FFF;
    font-family: Roboto-Bold;
  `,
  Logo: styled.Image`
    width: 250px;
    height: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  `,

  Titulo: styled.View`
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    margin: 10px;
    padding-bottom: 10px;
    color: #000;
    font-weight: bold;
    background-color: transparent;
  `,
  TextoLogin: styled.Text`
    color: #000;
    margin-bottom: 5px;
    font-size: 25px;
  `,
  Texto: styled.Text`
    color: #A7A7A7;
    font-family: Roboto-Bold;
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
};
