import React, { useState, createRef } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";
import CircularProgress from "react-native-circular-progress-indicator";
import C from "./style.js";

const steps = [
  {
    id: "1",
    porce: "0",
    title: "Informe seus dados pessoais",
  },
  {
    id: "2",
    porce: "25",
    title: "Informe seus dados pessoais",
  },
  {
    id: "3",
    porce: "50",
    title: "Informe seu endereço",
  },
  {
    id: "4",
    porce: "75",
    title: "Informe se participa de algum PG",
  },
  {
    id: "5",
    porce: "100",
    title: "Defina uma senha de acesso",
  },
  {
    id: "6",
    porce: "100",
    title: "Defina uma senha de acesso",
  },
];

export default (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [formValues, setFormValues] = useState({email: '', nome: ''});
  const [loading, setLoading] = useState(false);
  // campos do Formulario
  const [estadocivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pequenogrupo, setPequenoGrupo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState();
  const [data_nascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma_senha, setConfirmaSenha] = useState("");

  const handleNext = () => {
    setCurrentStep((prevState) => prevState + 1);
    setPorcentagem((soma) => soma + 25);
  };

  const handlePrev = () => {
    setCurrentStep((prevState) => prevState - 1);
    setPorcentagem((soma) => soma - 25);
  };

  /*const handleChange = (values) => (e) => {
    setFormValues( { [values]: e.target.value });
  };*/

  const handleSubmit = () => {
    //e.preventDefault();

    //console.log("Form sent...", formValues);

    setLoading(true);

    // simulate api
    //await fakeApi(() => setLoading(false), 2000);
    //{currentStep + 1} de {steps.length}
  };
  return (
    <C.Box>
      {loading === true && <Text>Cadastrando...</Text>}
      <C.Header>
        <View>
          <C.Titulo>Cadastro de Membros</C.Titulo>
          <C.TituloFormulario>{steps[currentStep].title}</C.TituloFormulario>
        </View>
        <C.Linha></C.Linha>
        <C.Contador>
          <CircularProgress
            value={porcentagem}
            showProgressValue={false}
            title={currentStep + 1 + " de " + steps.length}
            titleColor={"#B4B4B4"}
            titleStyle={{ fontWeight: "bold" }}
            duration={2000}
            radius={55}
            textColor={"#B4B4B4"}
            activeStrokeColor={"#55A1DC"}
            inActiveStrokeColor={"#D1D1D1"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={10}
            activeStrokeWidth={10}
          />
        </C.Contador>
      </C.Header>
      <C.Body>
        {steps[currentStep].id === "1" && (
          <C.Fields>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Nome"
                placeholder="Nome"
                onChangeText={(t) => setNome(t)}
                value={nome}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="Email"
                onChangeText={(t) => setEmail(t)}
                value={email}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Telefone"
                placeholder="Telefone"
                render={(props) => (
                  <TextInputMask
                    {...props}
                    value={telefone}
                    type="cel-phone"
                    onChangeText={(text) => setTelefone(text)}
                  />
                )}
              />
            </C.Field>
          </C.Fields>
        )}
        {steps[currentStep].id === "2" && (
          <C.Fields>
            <C.Field>
              <TextInput
                mode="outlined"
                label="CPF"
                placeholder="cpf"
                onChangeText={(value) => setCep(value)}
                value={cpf}
                render={(props) => (
                  <TextInputMask
                    {...props}
                    value={cpf}
                    type="cpf"
                    onChangeText={(text) => setCpf(text)}
                  />
                )}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Data de Nascimento"
                placeholder="Data de Nascimento"
                onChangeText={(value) => setDataNascimento(value)}
                value={data_nascimento}
                render={(props) => (
                  <TextInputMask
                    {...props}
                    value={data_nascimento}
                    type="datetime"
                    options={{ format: "DD/MM/YYYY" }}
                    onChangeText={(text) => setDataNascimento(text)}
                  />
                )}
              />
            </C.Field>
            <C.Field>
              <Picker
                selectedValue={estadocivil}
                mode={"dialog"}
                onValueChange={(itemValue) => setEstadoCivil(itemValue)}>
                <Picker.Item label="Selecione o estado civil" value="I" />
                <Picker.Item label="Solteiro" value="S" />
                <Picker.Item label="Casado" value="C" />
                <Picker.Item label="Viúva" value="V" />
                <Picker.Item label="Separado" value="A" />
                <Picker.Item label="Dovorciado" value="D" />
              </Picker>
            </C.Field>
            <C.Field>
              <Picker
                selectedValue={sexo}
                style={{ height: 55, borderRadius: 5 }}
                mode={"dialog"}
                onValueChange={(itemValue) => setSexo(itemValue)}>
                <Picker.Item label="Selecione o sexo " value="" />
                <Picker.Item label="Mulher" value="M" />
                <Picker.Item label="Homem" value="H" />
              </Picker>
            </C.Field>
          </C.Fields>
        )}
        {steps[currentStep].id === "4" && (
          <C.Field>
            <Picker selectedValue={pequenogrupo}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setPequenoGrupo(itemValue)}>
              <Picker.Item label="Selecione o PG" value="I" />
              <Picker.Item label="Nome do PG" value="" />
            </Picker>
          </C.Field>
        )}
        {steps[currentStep].id === "5" && (
          <C.Fields>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Senha"
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={(value) => setSenha(value)}
                value={senha}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Repita a Senha"
                secureTextEntry={true}
                placeholder="Repita a Senha"
                onChangeText={(value) => setConfirmaSenha(value)}
                value={confirma_senha}
              />
            </C.Field>
          </C.Fields>
        )}
        {steps[currentStep].id === "3" && (
          <C.Fields>
            <C.Field>
              <TextInput
                mode="outlined"
                label="cep"
                placeholder="Cep"
                onChangeText={(value) => setCep(value)}
                value={cep}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="endereco"
                placeholder="Endereco"
                onChangeText={(value) => setEndereco(value)}
                value={endereco}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Bairro"
                placeholder="Bairro"
                onChangeText={(value) => setBairro(value)}
                value={bairro}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Numero"
                placeholder="Numero"
                onChangeText={(value) => setNumero(value)}
                value={numero}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Complemento"
                placeholder="Complemento"
                onChangeText={(value) => setComplemento(value)}
                value={complemento}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Cidade"
                placeholder="Cidade"
                onChangeText={(value) => setCidade(value)}
                value={cidade}
              />
            </C.Field>
            <C.Field>
              <TextInput
                mode="outlined"
                label="Estado"
                placeholder="Estado"
                onChangeText={(value) => setEstado(value)}
                value={estado}
              />
            </C.Field>
          </C.Fields>
        )}
        {steps[currentStep].id === "6" && (
          <View>
            <Text style={{color:'#000',}}>{confirma_senha}</Text>
            <Text style={{color:'#000',}}>{cpf}</Text>
            <Text style={{color:'#000',}}>{email}</Text>
            <Text style={{color:'#000',}}>{nome}</Text>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          {currentStep >= steps.length - 5 && (
            <C.BotaoStepVolta onPress={handlePrev}>
              <C.BotaoTextoVolta> VOLTAR </C.BotaoTextoVolta>
            </C.BotaoStepVolta>
          )}
          {currentStep < steps.length - 1 && (
            <C.BotaoStep onPress={handleNext}>
              <C.BotaoTexto> PROXIMO </C.BotaoTexto>
            </C.BotaoStep>
          )}

          {currentStep === steps.length - 1 && (
            <C.BotaoCadastra onPress={handleSubmit}>
              <C.BotaoTexto> CADASTRAR </C.BotaoTexto>
            </C.BotaoCadastra>
          )}
        </View>
      </C.Body>
    </C.Box>
  );
};
