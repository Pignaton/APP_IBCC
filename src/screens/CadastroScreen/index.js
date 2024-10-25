import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useStateValue } from "../../contexts/StateContext";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import { TextInput, DefaultTheme } from "react-native-paper";
import FlashMessage, { hideMessage, showMessage } from "react-native-flash-message";
import { TextInputMask } from "react-native-masked-text";
import C from "./style";
import funcao from "../../functions/funcoes";
import api from "../../services/api";
import ModalCepCustom from "../../components/ModalCepCustom";


export default () => {

  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  //const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [selectedculto, setSelectedCulto] = useState();
  const [selectedcampanha, setSelectedCampanha] = useState("");
  const [estadocivil, setEstadoCivil] = useState("");
  const [membroigreja, setMembroIgreja] = useState("");
  const [bairro, setBairro] = useState("");
  const [igreja, setIgreja] = useState("");

  const [loading, setLoading] = useState(true);
  const [alerta, setAlerta] = useState(false);
  const [mensagem, setMensagem] = useState();
  const [aviso, setAviso] = useState();

  const [listacultos, setListaCultos] = useState([]);
  const [listacampanhas, setListaCampanhas] = useState([]);
  const [exibeCampo, setExibeCampo] = useState([]);

  const theme = {
    ...DefaultTheme,
    roundness: 8,
    typescale: {
      labelLarge: { letterSpacing: 1 },
    },
    colors: {
      ...DefaultTheme.colors,
      primary: "#7c04e4", //3498db
      accent: "#f1c40f",
      secondary: "#FF0000", //#e5e5e5 - #F5F6FA
      error: "#f13a59",
      outline: "#E4E4E4",
      secondaryContainer: "#E4E4E4",
      surfaceVariant: "#E4E4E4",
      surface: "#E4E4E4",
      brandPrimary: "#fefefe",
      brandSecondary: "#E4E4E4",
      tertiary: "#a1b2c3",
    },
  };

  const handleselectedLanguage = () => {
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#FFF", fontFamily: "Roboto-Bold" },
      headerTitle: "REGISTRAR VISITANTE",
    });
    getListaCultos();
    getListaCampanhas();
    handleExibeCampos();
  }, []);


  const getListaCultos = async () => {
    const result = await api.listaCultos();
    if (result.error === "") {
      setListaCultos(result.cultos);
    } else {
      alert(result.error);
    }
  };

  const getListaCampanhas = async () => {
    const result = await api.listaCampanhas();
    if (result.error === "") {
      setListaCampanhas(result.campanhas);
    } else {
      alert(result.error);
    }
  };

  //Exibe os campos culto e campanha
  const handleExibeCampos = async () => {
    let result = await api.exibeCampo();
    if (result.error != true) {
      setExibeCampo(result.sistema);
    } else {
      setAlerta(result.error);
    }
  };


  const handleCadastroButton = async () => {
    let result = await api.cadastro(selectedculto, selectedcampanha, nome, idade, telefone, sexo, estadocivil, membroigreja, igreja, bairro,
    );
    if (result["error"] === "") {
      setAviso(result["sucesso"]);
      setMensagem(null);
      alert("Prontinho, cadastro realizado com sucesso.");
    } else {
      setMensagem(result["errors"]);
    }
  };

  showMessage({
    type: "danger",
    icon: "danger",
    message: "Ops, problema",
    description: "Preencha os campos em vermelho.",
    autoHide: false,
  });

  return (

    <C.ScrollView>
      <C.Container>
        {alerta === true && <ModalCepCustom />}
        {mensagem && true && <FlashMessage position="bottom" />}
        {aviso && <FlashMessage position="bottom" type="success" icon="success" />}

        <View>
          <TextInput
            label="Nome Completo"
            mode="outlined"
            keyBoardType="text"
            style={[styles.mText]}
            value={nome}
            theme={theme}
            multiline={true}
            onChangeText={t => setNome(t)}
          />
          {mensagem?.nome &&
            <C.Erro type="error" visible>{mensagem?.nome}</C.Erro>
          }
        </View>

        <TextInput
          label="Idade"
          mode="outlined"
          keyBoardType={"number-pad"}
          style={[styles.mText]}
          value={idade}
          theme={theme}
          onChangeText={t => setIdade(t)}
          render={(props) => (
            <TextInputMask
              {...props}
              value={idade}
              type="only-numbers"
              onChangeText={(text) => setIdade(text)}
            />
          )}
        />
        {mensagem?.idade &&
          <C.Erro>{mensagem?.idade}</C.Erro>
        }

        <TextInput
          label="(00) 00000 0000"
          mode="outlined"
          keyboardType="phone-pad"
          theme={theme}
          style={[styles.mText]}
          value={telefone}
          placeholder={"(00) 00000 0000"}
          onChangeText={t => setTelefone(t)}
          render={(props) => (
            <TextInputMask
              {...props}
              value={telefone}
              type="cel-phone"
              onChangeText={(text) => setTelefone(text)}
            />
          )}
        />
        {mensagem?.telefone &&
          <C.Erro>{mensagem?.telefone}</C.Erro>
        }

        <View style={styles.picker}>
          <RNPickerSelect
            value={estadocivil}
            placeholder={{ label: "Estado Civil...", value: "I" }}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value: String) => {
              setEstadoCivil(value);
            }}
            items={[
              { label: "Solteiro", value: "S" },
              { label: "Casado", value: "C" },
              { label: "Viúva", value: "V" },
              { label: "Separado", value: "A" },
              { label: "Divorciado", value: "D" },
              { label: "Namorado", value: "N" },
              { label: "Noivo", value: "O" },
            ]} />
          {mensagem?.estado_civil &&
            <C.Erro>{mensagem?.estado_civil}</C.Erro>
          }
        </View>

        <View style={styles.picker}>
          <Picker selectedValue={sexo}
                  onValueChange={(value: String) =>
                    setSexo(value)
                  }>
            <Picker.Item label="Selecione o seu gênero" value="" />
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Masculino" value="M" />
          </Picker>
          {mensagem?.sexo &&
            <C.Erro>{mensagem?.sexo}</C.Erro>
          }
        </View>

        <TextInput
          mode="outlined"
          label="bairro"
          keyBoardType="text"
          value={bairro}
          onChangeText={(t) => setBairro(t)}
          theme={theme}
          style={[styles.mText]}
        />

        <View style={styles.picker}>
          {exibeCampo.map((item, index) => (
            (item.nom_campo === "culto" && item.status === "1" &&
              <Picker selectedValue={selectedculto}
                      onValueChange={(value: String ) =>
                        setSelectedCulto(value)
                      }>
                <Picker.Item label="Selecione o dia do culto" value="" />
                {listacultos.map((item, index) => (
                  <Picker.Item
                    label={item.nom_culto + " - " + funcao.diaCulto(item.dia_culto) + " - " + funcao.periodo(item.ind_periodo)}
                    value={item.cod_culto}
                    key={index} />
                ))}
              </Picker>
            )
          ))}
          {mensagem?.culto &&
            <C.Erro>{mensagem?.culto}</C.Erro>
          }
        </View>

        {exibeCampo.map((item, index) => (
          (item.nom_campo === "campanha" && item.status === "1" &&
            <View style={styles.picker}>
              <Picker selectedValue={selectedcampanha}
                      onValueChange={(value: String) =>
                        setSelectedCampanha(value)
                      }>
                <Picker.Item label="Selecione a campanha" value="" />
                {listacampanhas.map((item, index) => (
                  <Picker.Item label={item.nom_campanha} value={item.cod_campanha} key={index} />
                ))}
              </Picker>
            </View>
          )))}
        {mensagem?.campanha &&
          <C.Erro>{mensagem?.campanha}</C.Erro>
        }

        <View style={styles.picker}>
          <Picker selectedValue={membroigreja} placeholder=""
                  onValueChange={(value: String) =>
                    setMembroIgreja(value)
                  }>
            <Picker.Item label="Membro de uma igreja?" value="" />
            <Picker.Item label="Sim" value="S" />
            <Picker.Item label="Não" value="N" />
          </Picker>
          {mensagem?.membro_igreja &&
            <C.Erro>{mensagem?.membro_igreja}</C.Erro>
          }
        </View>
        {membroigreja === "S" &&
          <TextInput
            label="Qual Igreja?"
            mode="outlined"
            keyBoardType="text"
            value={igreja}
            style={[styles.mText]}
            theme={theme}
            multiline={true}
            onChangeText={t => setIgreja(t)}
          />
        }

        <C.ButtonArea onPress={handleCadastroButton}>
          <C.ButtonText style={styles.font}>CADASTRAR</C.ButtonText>
        </C.ButtonArea>
      </C.Container>
    </C.ScrollView>
  );
}

const styles = StyleSheet.create({
  mText: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
    color: "#F4F4F4",
  },
  mTextDisplay: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    display: "none",
  },
  picker: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    color: "#000",
  },
});
