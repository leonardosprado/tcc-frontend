import axios from "axios";

const API_URL = "localhost:3000/api/v1/";

class AuthService{
    login(username,password){
        return axios
        .post(API_URL + "loginmonitor", {
            username,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("@Letramento:JWT_TOKEN", JSON.stringify(response.data));
            }

            return response.data;
      });
    }
    logout() {
        localStorage.removeItem("@Letramento:JWT_TOKEN");
      }
    
    register(username, email, password) {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('@Letramento:JWT_TOKEN'));;
    }
}

export default new AuthService();
