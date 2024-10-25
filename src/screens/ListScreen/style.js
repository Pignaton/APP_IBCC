import styled from "styled-components/native";

export default {
  Container: styled.View`
    flex: 1;
    background-color: #F5F6FA; {/*#F5F6FA*/}
    padding: 10px;
  `,
 /*Scroller: styled.ScrollView`
    flex: 1;
    padding: 20px;
  `,*/
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
