import styled from "styled-components/native";

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #F5F6FA;
  `,
  Logo: styled.Image`
    width: 250px;
    height: 220px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  `,

  Titulo: styled.View`
    justify-content: space-around;
    align-items: flex-start;
    font-size: 18px;
    margin: 10px;
    padding-bottom: 20px;
    color: #000;
    font-weight: bold;
    background-color: transparent;
  `,
  TextoHome: styled.View``,
  Paragrafo: styled.Text`
    margin-bottom: 5px;
    margin-left:15px;
    color: #55A1DC;
    font-size: 25px;
    font-family: Fredoka-Bold;
  `,
  Span: styled.Text`
    text-align: center;
    font-size: 25px;
    color: #55A1DC;
    font-family: Fredoka-Bold;
  `,
  SubTexto: styled.Text`
    color: #A7A7A7;
    padding-top: 20px;
    text-align: justify;
    font-family: Roboto-Bold;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #55A1DC;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 15px;
  `,
  ButtonText: styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
  `,
  ButtonTextC: styled.Text`
    color: #55A1DC;
    font-size: 15px;
    font-weight: bold;
  `,
  ButtonAreaC: styled.TouchableOpacity`
    background-color: #FFFF;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 15px;
    border-width: 1;
    border-color: #55A1DC;
  `,
};
