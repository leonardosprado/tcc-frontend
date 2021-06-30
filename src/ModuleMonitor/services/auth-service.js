// SERVIÇO MONITOR
import axios from "axios";
import {API_URL} from '../../services/config'

class AuthService{
    login(username,password){
        return axios
        .post(API_URL + "loginmonitor", {
            "login":username,
            "password":password
        })
        .then(response => {
            if (response.data.auth) {
                localStorage.setItem("@Letramento_monitor:JWT_TOKEN", JSON.stringify(response.data.token));
            }

            return response.data;
      });
    }

    loginAprendiz(username,password){
        return axios
        .post(API_URL + "loginaprendiz", {
            "login":username,
            "password":password
        })
        .then(response => {
            if (response.data.auth) {
                localStorage.setItem("@Letramento_monitor:JWT_TOKEN", JSON.stringify(response.data.token));
            }

            return response.data;
      });
    }
    loginAprendiz_Novo(username,password){
        return axios
        .post(API_URL + "loginaprendiz", {
            "login":username,
            "password":password
        })
        .then(response => {
            if (response.data.auth) {
                localStorage.setItem("@Letramento_aprendiz:JWT_TOKEN", JSON.stringify(response.data.token));
            }

            return response.data;
      });
    }
    async verificarUserToken(){
        try {
            const headers ={
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "x-access-token": this.getCurrentUser()
            };
            const response = await axios({
                method:'POST',
                url:`${API_URL}authorization`,
                headers:headers
            });
            if(response.data){
                alert("opa")
                return true;
            }
            alert("opa")
        } catch (error) {
            alert("ops")
            return(false);
        }
      
    //     return true;
    }
   
    logout() {
        localStorage.removeItem("@Letramento_monitor:JWT_TOKEN");
      }
    
    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    async getCurrentUserData(){
        try {
            const headers ={
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "x-access-token": this.getCurrentUser()
            };
            const response = await axios({
                method:'POST',
                url:`${API_URL}authorization`,
                headers:headers
            });
            if(response.data){
                return response.data;
            }
           
        } catch (error) {
            return(false);
        }
    }


    getCurrentUser() {
        return JSON.parse(localStorage.getItem('@Letramento_monitor:JWT_TOKEN'));;
    }


    async validadeTokenUser(){
        const headers ={
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "x-access-token": this.getCurrentUser()
            };
          
        // const response = await axios.post(API_URL+'authorization/',axiosConfig);
        const response = await axios({
            method:'POST',
            url:API_URL+'authorization',
            headers:headers
        });
        return response;
    }
}

export default new AuthService();
