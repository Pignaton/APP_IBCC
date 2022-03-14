import styled from "styled-components/native";

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #F5F6FA;
  }
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 20px;
  `,
  LoadingIcon: styled.ActivityIndicator``,
  NoListaArea: styled.View`
    justify-content: center;
    align-items: center;
    padding: 30px;
  `,
  NoListaTexto: styled.Text`
    font-size: 15px;
    color: #000;
  `,
};
