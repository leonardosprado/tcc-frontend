export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('@Letramento_monitor:JWT_TOKEN'));
  
    if (user && user.accessToken) {
      return { Authorization: user.accessToken };
    } else {
      return {};
    }
  }