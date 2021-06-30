import axios from 'axios';
import authHeader from './auth-header';
import authService from './auth-service';
import {API_URL} from '../../services/config'

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
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

  async getMonitorById(id) {
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = usuarioAtual.data.ID;
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'GET',
          url:API_URL+'monitor/'+id,
          headers:headers
      });
      return response.data[0];
    }
  }
  async getAprendizById(id) {
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = usuarioAtual.data.ID;
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'GET',
          url:API_URL+'aprendiz/'+id,
          headers:headers
      });
      return response.data[0];
    }
  }
  async createAprendiz(data){
    const usuarioAtual = await authService.validadeTokenUser();
    try {
      if(usuarioAtual.status==200){
        const headers ={
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
        };
    
        const response = await axios({
            method:'POST',
            url:API_URL+'create_aprendiz',
            headers:headers,
            data:data
        });
        return response.data;
      }
    } catch (error) {
      // alert(error.response);

      return({"error":error.response.data})
    }
  
  }
  async createMonitor(data){
    const usuarioAtual = await authService.validadeTokenUser();
    try {
      if(usuarioAtual.status==200){
        const headers ={
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
        };
    
        const response = await axios({
            method:'POST',
            url:API_URL+'create_monitor',
            headers:headers,
            data:data
        });
        return response.data;
      }
    } catch (error) {
      // alert(error.response);

      return({"error":error.response.data})
    }
  
  }

  async getAllMonitores() {
    const usuarioAtual = await authService.validadeTokenUser();
    try {
      if(usuarioAtual.status==200){
        const headers ={
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
        };
    
        const response = await axios({
            method:'GET',
            url:API_URL+'monitores/',
            headers:headers
        });
        console.log(response.status)
        return response.data;
      }
    } catch (error) {
      return(error);
    }
   
    
  }
  
  async getCurrentMonitor() {
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = usuarioAtual.data.ID;
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'GET',
          url:API_URL+'monitor/'+current_user_id,
          headers:headers
      });
      return response.data[0];
    }
    
  }
  // async saveUser(data) {
  //   console.log(data);
  //   const usuarioAtual = await authService.validadeTokenUser();
  //   if(usuarioAtual.status==200){
  //     const current_user_id = usuarioAtual.data.ID;
  //     const headers ={
  //       'Content-Type': 'application/json',
  //       "Access-Control-Allow-Origin": "*",
  //       "x-access-token": authService.getCurrentUser()
  //     };
  
  //     const response = await axios({
  //         method:'PUT',
  //         url:API_URL+'alter_usuario/'+current_user_id,
  //         headers:headers,
  //         data:data
  //     });
  //     return response.data[0];
  //   }
    
  // }
  async saveAprendizById(data,id) {
    
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = data.id_usuario;
      
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'PUT',
          url:API_URL+'alter_aprendiz/'+id,
          headers:headers,
          data:data
      });
      return response.data;
    }
  }
  async saveMonitorById(data,id) {
    console.log(data);
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = usuarioAtual.data.ID;
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'PUT',
          url:API_URL+'alter_monitor/'+id,
          headers:headers,
          data:data
      });
      return response.data[0];
    }
    
  }
  async saveMonitor(data) {
    console.log(data);
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = usuarioAtual.data.ID;
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'PUT',
          url:API_URL+'alter_monitor/'+current_user_id,
          headers:headers,
          data:data
      });
      return response.data[0];
    }
    
  }
  async saveUsuarioById(data,id) {
    
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = data.id_usuario;
      
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'POST',
          url:API_URL+'alter_usuario/'+id,
          headers:headers,
          data:data
      });
      return response.data[0];
    }
  }

 

  async saveUsuario(data) {
    
    const usuarioAtual = await authService.validadeTokenUser();
    if(usuarioAtual.status==200){
      const current_user_id = data.id_usuario;
      
      const headers ={
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-access-token": authService.getCurrentUser()
      };
  
      const response = await axios({
          method:'POST',
          url:API_URL+'alter_usuario/'+current_user_id,
          headers:headers,
          data:data
      });
      return response.data[0];
    }
    
  }
  async getAllAprendiz() {
    try{
      const usuarioAtual = await authService.validadeTokenUser();
      if(usuarioAtual.status==200){
        // const current_user_id = data.id_usuario;
        
        const headers ={
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "x-access-token": authService.getCurrentUser()
        };
    
        const response = await axios({
            method:'GET',
            url:API_URL+'aprendizes',
            headers:headers,
          
        });
        console.log(response.data);
        return response.data;
      }

    }catch (error) {
        // return(error);
        return({'error':error}); 
    }
    
  }
}

export default new UserService();