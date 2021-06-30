// SERVIÇO 
import axios from "axios";
import {API_URL} from './config';
const TOKEN = localStorage.getItem('@Letramento:JWT_TOKEN')



class AuthService{

    login(username,password){
        return axios
        .post(API_URL + "loginmonitor", {
            username, 
            password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("@Letramento_aprendiz:JWT_TOKEN", JSON.stringify(response.data));
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
               
                return true;
            }
           
        } catch (error) {
          
            return(false);
        }
    
    }

    logout() {
        localStorage.removeItem("@Letramento_aprendiz:JWT_TOKEN");
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

    async getCurrentUserDataById(){
        try {
            const response = await this.getCurrentUserData();
            console.log(response);
            if(response.login){
                var id = response;
                const headers ={
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": this.getCurrentUser()
                };
                const response = await axios({
                    method:'POST',
                    url:`${API_URL}aprendiz${id}`,
                    headers:headers
                });
                if(response.data){
                    return response.data;
                }
            }
        } catch (error) {
            return error;
        }
      
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('@Letramento_aprendiz:JWT_TOKEN'));;
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
