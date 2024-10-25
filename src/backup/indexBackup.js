import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useStateValue } from "../contexts/StateContext";
import { Picker } from "@react-native-picker/picker";
import { TextInput, Button, RadioButton, Text, DefaultTheme } from "react-native-paper";
import FlashMessage, { hideMessage, showMessage } from "react-native-flash-message";
import { TextInputMask } from 'react-native-masked-text';
import C from "../screens/CadastroScreen/style";
import funcao from "../functions/funcoes";
import api from "../services/api";
import apiOut from "../services/api_out";
import ModalCepCustom from "../components/ModalCepCustom";
import Icon from "react-native-vector-icons/FontAwesome";

export default () => {

  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [selectedculto, setSelectedCulto] = useState();
  const [selectedcampanha, setSelectedCampanha] = useState("");
  const [estadocivil, setEstadoCivil] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

  const [loading, setLoading] = useState(true);
  const [viacep, setViaCep] = useState();
  const [alerta, setAlerta] = useState(false);
  const [mensagem, setMensagem] = useState();
  const [aviso, setAviso] = useState();

  const [listacultos, setListaCultos] = useState([]);
  const [listacampanhas, setListaCampanhas] = useState([]);
  const [exibeCampo, setExibeCampo] = useState([]);

  const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
      secondary: "#FF0000", //#e5e5e5 - #F5F6FA
      error: "#f13a59",
    },
  };

  const handleselectedLanguage = () => {
  };

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#FFF" },
      headerTitle: "Registrar Visitante",
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

  // Api da viacep
  const handleCep = async () => {
    let result = await apiOut.buscaCep(cep);
    if (result.erro != true) {
      setViaCep(result);
    } else {
      setAlerta(result.erro);
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
    let result = await api.cadastro(selectedculto, selectedcampanha, nome, idade, email, telefone, sexo, estadocivil, cep, endereco, bairro, numero, complemento, localidade, uf);
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
        {mensagem && mensagem !== null && <FlashMessage position="bottom" />}
        {aviso && <FlashMessage position="bottom" type="success" icon="success" />}
        <C.Logo />
        <C.Titulo>
          <C.TextoLogin>
            Registrar Visitante
          </C.TextoLogin>
          <C.Texto>Campos com * são obrigátorios </C.Texto>
        </C.Titulo>
        {mensagem?.nome &&
          <C.Erro>{mensagem?.nome}</C.Erro>
        }
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
        {mensagem?.idade &&
          <C.Erro>{mensagem?.idade}</C.Erro>
        }
        <TextInput
          label="Idade"
          mode="outlined"
          keyBoardType={'number-pad'}
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
        {/*{mensagem?.email &&
          <C.Erro>{mensagem?.email}</C.Erro>
        }
       <TextInput
          label="Email"
          mode="outlined"
          keyBoardType="email-address"
          style={[styles.mText]}
          value={email}
          theme={theme}
          onChangeText={t => setEmail(t)}
        />*/}
        {mensagem?.telefone &&
          <C.Erro>{mensagem?.telefone}</C.Erro>
        }
        <TextInput
          label="Telefone"
          mode="outlined"
          keyboardType="phone-pad"
          theme={theme}
          style={[styles.mText]}
          value={telefone}
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
        {mensagem?.estado_civil &&
          <C.Erro>{mensagem?.estado_civil}</C.Erro>
        }
        <Picker style={picker.select} selectedValue={estadocivil}
                onValueChange={(itemValue, itemIndex) =>
                  setEstadoCivil(itemValue)
                }>
          <Picker.Item label="Estado Civil..." value="I" />
          <Picker.Item label="Solteiro" value="S" />
          <Picker.Item label="Casado" value="C" />
          <Picker.Item label="Viúva" value="V" />
          <Picker.Item label="Separado" value="A" />
          <Picker.Item label="Divorciado" value="D" />
          <Picker.Item label="Namorado" value="N" />
        </Picker>
        {mensagem?.sexo &&
          <C.Erro>{mensagem?.sexo}</C.Erro>
        }
        <RadioButton.Group onValueChange={newValue => setSexo(newValue)} value={sexo}>
          <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
            <View>
              <Text>Feminino</Text>
              <RadioButton value="F" />
            </View>
            <View>
              <Text>Masculino</Text>
              <RadioButton value="M" />
            </View>
          </View>
        </RadioButton.Group>
        {mensagem?.culto &&
          <C.Erro>{mensagem?.culto}</C.Erro>
        }
        {exibeCampo.map((item, index) => (
          (item.nom_campo === "culto" && item.status === '1' &&
            <Picker style={picker.select} selectedValue={selectedculto}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedCulto(itemValue)
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
        {mensagem?.campanha &&
          <C.Erro>{mensagem?.campanha}</C.Erro>
        }
        {exibeCampo.map((item, index) => (
          (item.nom_campo === "campanha" && item.status === '1' &&
            <Picker style={picker.select} selectedValue={selectedcampanha}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedCampanha(itemValue)
                    }>
              <Picker.Item label="Selecione a campanha" value="" />
              {listacampanhas.map((item, index) => (
                <Picker.Item label={item.nom_campanha} value={item.cod_campanha} key={index} />
              ))}
            </Picker>
          )
        ))}
        <TextInput
          underlineColor="transparent"
          mode="outlined"
          label="Cep"
          keyBoardType="phone-pad"
          value={cep}
          onChangeText={(t) => setCep(t)}
          theme={theme}
          onBlur={handleCep}
          style={[styles.mText]}
          render={(props) => (
            <TextInputMask
              {...props}
              value={cep}
              type={'zip-code'}
              onChangeText={(text) => setCep(text)}
            />
          )}
        />
        <TextInput
          mode="outlined"
          label="Endereco"
          keyBoardType="text"
          value={viacep?.logradouro}
          onChangeText={(t) => setEndereco(t)}
          theme={theme}
          style={[styles.mText]}
        />
        <TextInput
          mode="outlined"
          label="bairro"
          keyBoardType="text"
          value={viacep?.bairro}
          onChangeText={(t) => setBairro(t)}
          theme={theme}
          style={[styles.mText]}
        />
        <TextInput
          mode="outlined"
          keyBoardType="numeric"
          label="Numero"
          value={numero}
          onChangeText={(t) => setNumero(t)}
          theme={theme}
          style={[styles.mText]}
          render={(props) => (
            <TextInputMask
              {...props}
              value={idade}
              type="only-numbers"
              onChangeText={(text) => setIdade(text)}
            />
          )}
        />
        <TextInput
          mode="outlined"
          label="Complemento"
          value={complemento}
          onChangeText={(t) => setComplemento(t)}
          theme={theme}
          style={[styles.mText]}
        />
        <TextInput
          mode="outlined"
          label="cidade"
          value={viacep?.localidade}
          onChangeText={(t) => setLocalidade(t)}
          theme={theme}
          style={[styles.mText]}
        />
        <TextInput
          mode="outlined"
          label="uf"
          value={viacep?.uf}
          onChangeText={(t) => setUf(t)}
          theme={theme}
          style={[styles.mText]}
        />
        <C.ButtonArea onPress={handleCadastroButton}>
          <C.ButtonText style={styles.font}>CADASTRAR</C.ButtonText>
        </C.ButtonArea>
      </C.Container>
    </C.ScrollView>
  );
}

const styles = StyleSheet.create({
  mText: {
    marginBottom: 15,
    backgroundColor:'#FFF',
  },
});

const picker = StyleSheet.create({
  select: {
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#E4E4E4",
    color: "#676767",
  },
});
