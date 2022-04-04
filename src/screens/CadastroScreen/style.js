import styled from "styled-components/native";

export default {
  ScrollView: styled.ScrollView``,
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #F5F6FA; /*#F5F6FA*/
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
    color:#55A1DC;
    margin-bottom:5px;
    font-size:25px;
    font-family:Fredoka-Bold;
  `,
  Texto: styled.Text`
    color: #A7A7A7;
    font-family: Roboto-Bold;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #55A1DC;
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
    font-family:Roboto-Bold;
  `,

  Erro: styled.Text`
    text-align: center;
    color:#F08585;
    font-family:Roboto-Bold;
    position: relative;
    
  `,
};
