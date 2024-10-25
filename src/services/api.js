import AsyncStorage from "@react-native-async-storage/async-storage";

//Teste
const baseUrl = 'https://kalweb.com.br/api';
// Laravel
//const baseUrl = "http://127.0.0.1:8000/api";
//Local
//const baseUrl = 'http://192.168.0.11:8000/api';

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
  cadastro: async (culto, campanha, nome, idade, telefone, sexo, estado_civil, membro_igreja, igreja, bairro) => {
    let json = await request("post", "/cadastro", {
      culto,
      campanha,
      nome,
      idade,
      telefone,
      sexo,
      estado_civil,
      membro_igreja,
      igreja,
      bairro,

    });
    return json;
  },
  cadastroPosVisita: async (cod_pessoa, nome_remetente, ind_status_contato_via, ind_status_celula, nome_celula, descricao) => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("post", "/cadastro/primeiro-contato", {
      cod_pessoa,
      nome_remetente,
      ind_status_contato_via,
      ind_status_celula,
      nome_celula,
      descricao,
    }, token);
    return json;
  },
  listaPosVisita: async (cod_pessoa) => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("get", `/lista/primeiro-contato/${cod_pessoa}`, {}, token);
    return json;
  },
  listaVisitantes: async () => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("get", "/lista/visitantes", {}, token);
    return json;
  },
  listaVisitante: async (cod_pessoa) => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("get", `/visitante/${cod_pessoa}`, {}, token);
    return json;
  },
  deletaVisitante: async (cod_pessoa) => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("delete", `/visitante/deleta/${cod_pessoa}`, {}, token);
    return json;
  },
  listaIntegrantes: async () => {
    let token = await AsyncStorage.getItem("token");
    let json = await request("get", "/lista/integrantes", {}, token);
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
