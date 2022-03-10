import React, { useSate, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import C from "./style";

import { useStateValue } from "../../contexts/StateContext";
import api from "../../../src/services/api";

export default () => {

  useEffect(() => {
    headerTitle: "Cadastrar Visitante";
  });
  return (
    <C.Container>
      <C.Texto> TELA DE REGITROV</C.Texto>
    </C.Container>
  );
}
