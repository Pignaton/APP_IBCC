import styled from "styled-components/native";

export default {

  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
   // background-color: #F5F6FA;
    background-color:#0A6EBD;
   // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  `,
  Logo: styled.Image`
    width: 250px;
    height: 220px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color:#CCC;
    background-color:#EDEDED;
    border-radius: 5px;
    color:#000;
    font-size:15px;
    padding: 10px;
    margin-bottom:15px;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #0A6EBD;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
  `,
  ButtonText: styled.Text`
    color:#FFF;
    font-size:15px;
    font-weight: bold;
  `,
};
