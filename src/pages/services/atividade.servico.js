import axios from 'axios';
import authHeader from '../../services/auth-header';
import authService from '../../services/auth-service';
import { API_URL } from '../../services/config'



class Atividades {

  
  async getAtividadeDisponivelUserAprendiz(){
    try{
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
      const data = await axios.get(API_URL + 'verifica_atividade',axiosConfig);
      console.log(data);
      return data.data;

    }
    catch(error){
      console.log(error);
      return error;
    }
  }
  async setAtividadeTentativa(id_atividade,dados){
    
    try{
      var aprendiz = await authService.getCurrentUserData();
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
      const tentativa = {
        'tentativa':dados
      }
      const data = await axios.patch(API_URL + `tentativa_atividade/${id_atividade}`,tentativa,axiosConfig);
      console.log(data);
      return data.data;

    }
    catch(error){
      console.log(error);
      return error;
    }
  }
  async setAtividade(id_atividade,dados){
    
    try{
      var aprendiz = await authService.getCurrentUserData();
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "x-access-token": authService.getCurrentUser()
        }
      };
    
      const data = await axios.put(API_URL + `realiza_atividade/${id_atividade}`,dados,axiosConfig);
      console.log(data);
      return data.data;

    }
    catch(error){
      console.log(error);
      return error;
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