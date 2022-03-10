import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = 'http://192.168.0.12:8000/api';

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

  let headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let req = await fetch(fullUrl, { method, headers, body });
  let json = await req.json();
  return json;
};

export default {
  getToken: async () => {
    return await AsyncStorage.getItem('token');
  },
  validateToken: async () => {
    let token = await AsyncStorage.getItem('token');
    let json = await request('post', '/auth/validacao', {}, token);
    return json;
  },
  login: async (email, senha) => {
    let json = await request('post', '/auth/login', { email, senha });
    return json;
  },
  logout: async () => {
    let token = await AsyncStorage.getItem('token');
    let json = await request('post', '/auth/logout',{}, token);
    await AsyncStorage.removeItem('token');
    return json;
  },
  register: async (cod_culto, cod_campanha, nome, idade, email, telefone, sexo, estado_civil) => {
    let json = await request('post', '/registro',{
      cod_culto, cod_campanha, nome, idade, email, telefone, sexo, estado_civil
    });
    return json;
  }
};
