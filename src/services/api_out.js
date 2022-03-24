import axios from 'axios';

export default {
  buscaCep: async (cep) => {
    const configurationObject = {
      method: 'get',
      url: `https://viacep.com.br/ws/${cep}/json/`,
    };
    try {
      const response = await axios(configurationObject);
      return (response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        alert('Data fetching cancelled ' + error);
      } else {
        alert('Operacão não pode ser realizada, contate o administrador');
      }
    }
  },
};


