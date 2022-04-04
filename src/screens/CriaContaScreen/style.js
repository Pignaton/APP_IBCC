import styled from "styled-components/native";

export default {
  LoadingIcon: styled.ActivityIndicator``,
  Box: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    justify-content: center;
    background-color: #FFF; /*#F5F6FA*/`,
  Header: styled.View`
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  `,
  Titulo: styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:#000;
  `,
  TituloFormulario: styled.Text`
    font-size: 15px;
    font-family: sans-serif;
    text-align: center;
    padding: 10px;
    color:#000;
  `,
  Linha: styled.View`
    background-color: #fff;
    //border: 1px solid #dedede;
    position: relative;
  `,
  Contador: styled.Text`
    padding: 5px;
    margin: 15px;
    font-size: 15px;
  `,
  Body: styled.View``,

  Fields: styled.View``,
  Field: styled.View`
    margin-Top: 10px;
  `,
  /*Select: styled.Picker`
    height: 55px;
    border-radius: 5px;
  `,*/
  BotaoStep: styled.TouchableOpacity`
    background-color: #55A1DC;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-Top: 10px;
  `,
  BotaoTexto: styled.Text`
    color: #FFF;
    font-size: 15px;
    font-weight: bold;
  `,

  BotaoStepVolta: styled.TouchableOpacity`
    background-color: #FFF;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-Top: 10px;
    border: 1px;
    border-color: #55A1DC;
  `,
  BotaoTextoVolta: styled.Text`
    color: #55A1DC;
    font-size: 15px;
    font-weight: bold;
  `,
  BotaoCadastra: styled.TouchableOpacity`
    background-color: #55A1DC;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-Top: 10px;
  `,
};
