import React from "react";
import api from "../services/api";

export default {

  diaCulto: (param) => {

    switch (param) {
      case "S":
        param = "Segunda-feira";
        break;
      case "T":
        param = "terça-feira";
        break;
      case "Q":
        param = "Quarta-feira";
        break;
      case "U":
        param = "Quinta-feira";
        break;
      case "S":
        param = "Sexta-feira";
        break;
      case "A":
        param = "Sábado";
        break;
      case "D":
        param = "Domingo";
        break;
      default:
        param = "";
    }
    return param;
  },
  periodo: (param) => {
    switch (param) {
      case "M":
        param = "Manhã";
        break;
      case "T":
        param = "Tarde";
        break;
      case "N":
        param = "Noite";
        break;
      case "I":
        param = "integral";
        break;
      default:
        param = "";
    }
    return param;
  },
  estadoCivil: (param) => {
    switch (param) {
      case "N":
        param = "Namorando";
        break;
      case "S":
        param = "Solteiro(a)";
        break;
      case "V":
        param = "Viúvo(a)";
        break;
      case "C":
        param = "Casado(a)";
        break;
      case "A":
        param = "Separado";
        break;
      case "D":
        param = "Divorciado(a)";
        break;
      case "O":
        param = "Noivo(a)";
        break;
      default:
        param = "Não informado";
    }
    return param;
  },
  TipoDeGrupo: (param) => {
    switch (param) {
      case "A":
        param = "Adulto";
        break;
      case "B":
        param = "Jovem";
        break;
      case "C":
        param = "Criança";
        break;
      case "D":
        param = "Casados";
        break;
      default:
        param = "Não informado";
    }
    return param;
  },
  TipoDeGrupoGenero: (param) => {
    switch (param) {
      case "M":
        param = "Mulheres";
        break;
      case "H":
        param = "Homens";
        break;
      case "O":
        param = "Misto";
        break;
      default:
        param = "Não informado";
    }
    return param;
  },
};
