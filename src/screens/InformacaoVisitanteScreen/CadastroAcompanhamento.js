import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import C from "./style";
import { StyleSheet, View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { DefaultTheme, TextInput } from "react-native-paper";

export default () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [nomeremetente, setNomeRemetente] = useState("");
  const [statuscontato, setStatusContato] = useState("");
  const [statuscelula, setStatusCelula] = useState("");
  const [nomecelula, setNomeCelula] = useState("");
  const [descricao, setDescricao] = useState("");
  const [posVisita, setPosVisita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState(null);
  const [aviso, setAviso] = useState(null);


  useEffect(() => {
    navigation.setOptions({
      headerTitle: "INFORMAÇÕES DO VISITANTE",
      headerTintColor: "#000",
    });
    getlistaPosVisita();
  }, []);

  useEffect(() => {
    if (posVisita.length > 0) {
      const visita = posVisita[0];
      setNomeRemetente(visita.nome_remetente || "");
      setStatusContato(visita.ind_status_contato_via || "");
      setStatusCelula(visita.ind_status_celula || "");
      setNomeCelula(visita.nome_celula || "");
      setDescricao(visita.descricao || "");
    }
  }, [posVisita]);


  const handleCadastroAcompanhamentoButton = async () => {
    const result = await api.cadastroPosVisita(
      route.params.cod_pessoa,
      nomeremetente,
      statuscontato,
      statuscelula,
      nomecelula,
      descricao,
    );
    if (result.error === "") {
      setAviso(result.sucesso);
      //setAviso(result["sucesso"]);
      setMensagem(null);
      alert("Cadastro realizado com sucesso.");
      getlistaPosVisita();
    } else {
      setMensagem(result.errors);
      //setMensagem(result["errors"]);
    }
  };

  const getlistaPosVisita = async () => {
    setLoading(true);
    const result = await api.listaPosVisita(route.params.cod_pessoa);
    setLoading(false);

    if (result.error === "") {
      const dados = result.informacao;
      setPosVisita(dados);
      if (dados.length > 0) {
        setNomeRemetente(dados?.nome_remetente || "");
        setStatusContato(dados.ind_status_contato_via || "");
        setStatusCelula(dados?.ind_status_celula || "");
        setNomeCelula(dados?.nome_celula || "");
        setDescricao(dados?.descricao || "");
      }

    } else {
      alert(result.error);
    }
  };

  const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: "#7c04e4", // Cor personalizada
      accent: "#f1c40f",
      error: "#f13a59",
      outline: "#E4E4E4",
    },
  };

  return (
    <C.Area>
      {loading && (
        <C.AreaLoading>
          <C.LoadingIcon color="#000" size="large" />
          <C.TituloLoading>Carregando...</C.TituloLoading>
        </C.AreaLoading>
      )}

      {!loading && (
        <C.Box>
          <C.HeaderBody>
            <TextInput
              multiline={true}
              label="Nome de quem fez o contato"
              mode="outlined"
              keyboardType="default"
              style={[styles.mText]}
              value={nomeremetente}
              theme={theme}
              onChangeText={(t) => setNomeRemetente(t)}
            />
            {mensagem?.nome_remetente && (
              <C.Erro type="error" visible>
                {mensagem?.nome_remetente}
              </C.Erro>
            )}

            <View style={[styles.picker, styles.bordered]}>
              <RNPickerSelect
                value={statuscontato}
                placeholder={{ label: "Como Fez o contato?", value: null }}
                onValueChange={(value) => setStatusContato(value)}
                items={[
                  { label: "Whatsapp", value: "W" },
                  { label: "Ligação", value: "L" },
                ]}
                style={pickerSelectStyles}
              />
              {mensagem?.ind_status_contato_via && (
                <C.Erro type="error" visible>
                  {mensagem?.ind_status_contato_via}
                </C.Erro>
              )}
            </View>

            <View style={[styles.picker, styles.bordered]}>
              <RNPickerSelect
                value={statuscelula}
                placeholder={{ label: "Indicou uma célula", value: null }}
                onValueChange={(value) => setStatusCelula(value)}
                items={[
                  { label: "Sim", value: "S" },
                  { label: "Não", value: "N" },
                ]}
                style={pickerSelectStyles}
              />
              {mensagem?.ind_status_celula && (
                <C.Erro type="error" visible>
                  {mensagem?.ind_status_celula}
                </C.Erro>
              )}
            </View>

            {statuscelula === "S" && (
              <TextInput
                label="Qual a Célula?"
                mode="outlined"
                value={nomecelula}
                style={styles.mText}
                theme={theme}
                multiline={true}
                onChangeText={(t) => setNomeCelula(t)}
              />
            )}

            <C.TextArea
              multiline
              mode="outlined"
              theme={theme}
              style={styles.mTextArea}
              numberOfLines={4}
              value={descricao}
              onChangeText={(t) => setDescricao(t)}
              onFocus={() => {
                setDescricao((prev) => {
                  return prev;
                });
              }}
            />
            {mensagem?.descricao && (
              <C.Erro type="error" visible>
                {mensagem?.descricao}
              </C.Erro>
            )}

            <C.ButtonArea onPress={handleCadastroAcompanhamentoButton}>
              <C.ButtonText style={styles.font}>ENVIAR</C.ButtonText>
            </C.ButtonArea>
          </C.HeaderBody>
        </C.Box>
      )}
    </C.Area>
  );
};

const styles = StyleSheet.create({
  mText: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  picker: {
    marginBottom: 15,
  },
  bordered: {
    borderWidth: 1,
    borderColor: "#DDD", // Cor da borda
    borderRadius: 8, // Borda arredondada
    backgroundColor: "#FFF",
    paddingHorizontal: 8, // Espaço interno para não colar no texto
    paddingVertical: 8,   // Espaço vertical para aumentar a área de toque
  },
  mTextArea: {
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 0,
    padding: 10,
    textAlignVertical: "top",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#000",
    paddingRight: 30, // Para alinhar o ícone da seta no iOS
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#000",
    paddingRight: 30, // Para alinhar o ícone da seta no Android
  },
};
