import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

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

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('@Letramento_monitor:JWT_TOKEN'));;
    }
}

export default new AuthService();
