import styled from "styled-components/native";

export default {
  Container: styled.View`
    flex: 1;
    background-color: #FFF; //#F5F6FA
    padding: 10px;
  }
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
  List: styled.FlatList``,
};
