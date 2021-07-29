import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { BsFillBriefcaseFill } from "react-icons/bs";


function Home({history}) {

    function handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
    
        history.push('/monitor/');
      }
    
  return (
    <Container>
        <h3  className="mb-4 display-5">Bem vindo</h3>
        <div className="container-fluid m-0 mb-5 p-0">
          <div className="row">
            <div className="col-md-4">
              <Link to={"./minha-conta/"}>
                <div className="item align-items-center my-2">
                  <IconContext.Provider  value={{size:"35px",color:"#989898" }}>
                      <AiOutlineUser />
                  </IconContext.Provider> 
                  <h6 className="p-0 px-3 m-0">Usuários</h6>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to={"./minha-conta/"}>
                <div className="item align-items-center  my-2 ">
                  <IconContext.Provider  value={{size:"35px",color:"#989898"}}>
                      <BsFillBriefcaseFill />
                  </IconContext.Provider> 
                  <h6 className="p-0 px-3 m-0">Atividades</h6>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to={"./minha-conta/"}>
                <div className="item align-items-center  my-2">
                  <IconContext.Provider  value={{size:"35px",color:"#989898" }}>
                      <AiOutlineUser />
                  </IconContext.Provider> 
                  <h6 className="p-0 px-3 m-0">Atribuir Atividades</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleLogout}>
            Sair
        </button>
    </Container>
  );
}

export default Home;