import React from 'react';

import ImageLetramento from '../../../assets/img/teacher-board.png';
// import { Container } from './styles';

function Atividades({history}) {

    function handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
    
        history.push('/monitor/');
      }
    
  return (
    <div>
        <h3>Atividades</h3>
        <button type="button" onClick={handleLogout}>
        Sair
        </button>
    </div>
  );
}

export default Atividades;