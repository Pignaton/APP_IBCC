import React from "react";

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
        alert("Parametro inválido");
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
        alert('Parametro inválido');
    }
    return param;
  },
  estadoCivil: (param) => {
    switch (param) {
      case "N":
        param = "Não informado";
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
      default:
        param = 'Não informado';
    }
    return param;
  },
};
