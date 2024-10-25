import styled from "styled-components/native";

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #7c04e4;
  `,
  LoadingIcon: styled.ActivityIndicator`
    margin-top: 40px;
  `,
  Logo: styled.Image`
    width: 45%;
    height: 45%;
  `,
};
