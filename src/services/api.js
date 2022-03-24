import AsyncStorage from "@react-native-async-storage/async-storage";

//Teste
const baseUrl = "http://comunidadeblog.ga/api";
//Local
//const baseUrl = 'http://192.168.0.6:8000/api';

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;

  switch (method) {
    case "get":
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case "post":
    case "put":
    case "delete":
      body = JSON.stringify(params);
      break;
  }

  let headers = { "Accept": "application/json",  "Content-Type": "application/json"};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let req = await fetch(fullUrl, { method, headers, body });
  let json = await req.json();
  return json;
};

export default {
  getToken: async () => {
    return await AsyncStorage.getItem("token");
  },
  validateToken: async () => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("post", "/auth/validacao", {}, token);
    return json;
  },
  login: async (email, senha) => {
    let json = await request("post", "/auth/login", { email, senha });
    return json;
  },
  logout: async () => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("post", "/auth/logout", {}, token);
    await AsyncStorage.removeItem("token");
    return json;
  },
  cadastro: async (culto, campanha, nome, idade, email, telefone, sexo, estado_civil, cep, endereco, bairro, numero, complemento, estado, uf) => {
    let json = await request("post", "/cadastro", {
      culto,
      campanha,
      nome,
      idade,
      email,
      telefone,
      sexo,
      estado_civil,
      cep,
      endereco,
      bairro,
      numero,
      complemento,
      estado,
      uf,
    });
    return json;
  },
  listaVisitantes: async () => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("get", "/lista/visitantes", {}, token);
    return json;
  },
  deletaVisitante: async (cod_pessoa) => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("delete", `/visitante/deleta/${cod_pessoa}`, {}, token);
    return json;
  },
  listaCampanhas: async () => {
    let json = await request("get", "/lista/campanhas", {});
    return json;
  },
  listaCultos: async () => {
    let json = await request("get", "/lista/cultos", {});
    return json;
  },
  exibeCampo: async () => {
    let json = await request("get", '/sistema/exibe-campos', {});
    return json;
  }
};
