import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth-service';
import userService from './user.service';
import {API_URL} from '../../services/config'


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
    }
};

class Atividades {
  getAllAtividades() {
      axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
      return axios.get(API_URL + 'atividades',axiosConfig)
      .then(response=>{
         return response.data;
      });
  }

  async createAtividade(file,sugestao_resposta,nivel,palavra,file_name){
    try{
      axiosConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
      const formdata = new FormData();
      formdata.append('palavra',palavra);
      formdata.append('nivel',nivel);
      formdata.append('sugestao_resposta',sugestao_resposta);
      formdata.append('imagem',file,file_name);
      const data = await axios.post(API_URL + 'createatividade',formdata,axiosConfig);
      return data;

    }
    catch(error){
      return error;
    }
  }
  
  async getAtividadeDisponivelUserAprendiz(){
    try{
      axiosConfig = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
      const data = await axios.get(API_URL + 'verifica_atividade',axiosConfig);
      return data;

    }
    catch(error){
      return error;
    }
  }

  async elaboraAtividade(data){
    try{
      console.log(data)
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'POST',
        url:API_URL+'elabora_atividade',
        headers:headers,
        data:data
      });
      
      return response.data;

    }
    catch(error){
      return error;
    }
  }


  
  async getAtividadeById(id){
    try{
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'GET',
        url:API_URL+'atividade/'+id,
        headers:headers,
   
      });
      
      return response.data[0];

    }
    catch(error){
      return error;
    }
  }


  async atividadesRealizadasById(id){
    try{
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'GET',
        url:API_URL+'atividades_realizadas/'+id,
        headers:headers,
   
      });
      
      return response.data[0];

    }
    catch(error){
      return error;
    }
  }

  async getAllAtividadesRealizadas(){
    try{
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'GET',
        url:API_URL+'atividades_realizadas',
        headers:headers,
   
      });
      
      return response.data;

    }
    catch(error){
      return error;
    }
  }

  async getSearchAtividadesRealizadas(s){
    try{
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'GET',
        url:API_URL+'atividade_realizada?s='+s,
        headers:headers,
   
      });
      
      return response.data;

    }
    catch(error){
      return error;
    }
  }

  async getAllAtividadesNRealizadas(){
    try{
      const headers= {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
      };
      // const formdata = new FormData();
      const response = await axios({
        method:'GET',
        url:API_URL+'atividades_n_realizadas',
        headers:headers,
   
      });
      
      return response.data;

    }
    catch(error){
      return error;
    }
  }

  async relatorioDeAtividadesNRealizadaDao(){
    try {
      const response = await this.getAllAtividadesNRealizadas();
     
      var resultado = [];
      if(response){
      const promises = response.map(async(item)=>{
          console.log(item);
          // var tentativa = JSON.parse(item.tentativa);
          // var tentativaLast = tentativa[tentativa.length-1]
          var usuario = await userService.getAprendizById(item.id_aprendiz);
          var result = {
            "id_atividade_programada":item.id_atividade_programada,
            "apelido":usuario.apelido,
            "id_aprendiz":item.id_aprendiz,
            "tempo":null,
            "id_atividade":item.id_atividade
          }
          console.log(result);
          resultado.push(result)
  
        });
        await Promise.all(promises);
        console.log(resultado);
        return(resultado);
      }
    } catch (error) {
      return([]);
    }
  }

  async relatorioDeAtividadesDao(){
    try {
      const response = await this.getAllAtividadesRealizadas();
      var resultado = [];
      if(response){
      const promises = response.map(async(item)=>{
          var tentativa = JSON.parse(item.tentativa);
          if(tentativa.length>0){
            var tentativaLast = tentativa[tentativa.length-1]
          }else tentativaLast = '1';
          var usuario = await userService.getAprendizById(item.id_aprendiz);
          var result = {
            "id_atividade_programada":item.id_atividade_programada,
            "apelido":usuario.apelido,
            "id_aprendiz":item.id_aprendiz,
            "tempo":tentativaLast.tempo,
            "id_atividade":item.id_atividade
          }
          // var result = `${usuario.apelido} REALIZOU A ATIVIDADE EM ${tentativaLast.tempo} SEGUNDOS`
          resultado.push(result)
  
        });
        await Promise.all(promises);
        return(resultado);
      }
    } catch (error) {
      return([]);
    }
  }


  async relatorioDeAtividadesSearchDao(search){
    try {
      const response = await this.getSearchAtividadesRealizadas(search);
      var resultado = [];
      if(response){
      const promises = response.map(async(item)=>{
          var usuario = await userService.getAprendizById(item.id_aprendiz);
          if(item.tentativa){
            var tentativa = JSON.parse(item.tentativa);
            if(tentativa.length>0){
              var tentativaLast = tentativa[tentativa.length-1]
            }else tentativaLast = '1';
            var result = {
              "id_atividade_programada":item.id_atividade_programada,
              "apelido":usuario.apelido,
              "id_aprendiz":item.id_aprendiz,
              "tempo":tentativaLast.tempo?tentativaLast.tempo:null,
              "id_atividade":item.id_atividade,
              "status":item.status
            }
          }
          else{
            var result = {
              "id_atividade_programada":item.id_atividade_programada,
              "apelido":usuario.apelido,
              "id_aprendiz":item.id_aprendiz,
              "tempo":null,
              "id_atividade":item.id_atividade,
              "status":item.status
            }

          }
         
          // var result = `${usuario.apelido} REALIZOU A ATIVIDADE EM ${tentativaLast.tempo} SEGUNDOS`
          resultado.push(result)
  
        });
        await Promise.all(promises);
        return(resultado);
      }
    } catch (error) {
      console.log(error);
      return([]);
    }
  }


  async relatorioDeAtividadesDaoById(id){
    try {
      
      // tentativa.filter((v,i,a)=>a.findIndex(t=>(t.texto === v.texto && t.texto===v.texto))===i)
      const response = await this.atividadesRealizadasById(id);
      var resultado = null;
      if(response){
        var tentativa = JSON.parse(response.tentativa);
        var tentativaLast = tentativa[tentativa.length-1]
        var usuario = await userService.getAprendizById(response.id_aprendiz);
        resultado = {
          "id_atividade_programada":response.id_atividade_programada,
          "apelido":usuario.apelido,
          "id_aprendiz":response.id_aprendiz,
          "tempo":tentativaLast.tempo,
          "id_atividade":response.id_atividade,
          "tentativa":tentativa
        }
        console.log(response);
        // var result = `${usuario.apelido} REALIZOU A ATIVIDADE EM ${tentativaLast.tempo} SEGUNDOS`
        console.log(resultado);
        return(resultado);
      }
    } catch (error) {
      return([]);
    }
  }

  


  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }


}

export default new Atividades();