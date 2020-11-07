import React from 'react';

// import { Container } from './styles';

function Home({history}) {

    function handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
    
        history.push('/monitor/');
      }
    
  return (
    <div>
        <h3>Bem vindo Monitor</h3>
        <button type="button" onClick={handleLogout}>
        Sair
        </button>
    </div>
  );
}

export default Home;