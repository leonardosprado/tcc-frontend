export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('@Letramento:JWT_TOKEN'));
  
    if (user && user.accessToken) {
      return { Authorization: user.accessToken };
    } else {
      return {};
    }
  }