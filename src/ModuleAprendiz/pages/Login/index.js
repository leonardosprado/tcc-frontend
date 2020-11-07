import React, { Component } from 'react';
import { Container, ContainerInt, Content } from '../../../pages/Main/styles';
import ImageLetramento from '../../../assets/img/image-letramento.jpeg'
import './styles.css';

function Login({history}) {

    function handleLogin(){
        localStorage.setItem("@Letramento:JWT_TOKEN",'seutoken');

        history.push('MainMonitor');
    }
  return (
      <div>
           <Container>
            <ContainerInt>
                <Content Background={ImageLetramento}>
                    {/* <Image src={ImageLetramento}/> */}
                </Content>
                <Content>
                    <div className="main-content">
                        <h3 style={{'color':'#656565','fontWeight':'100'}}>Bem vindo</h3>
                        <h1 style={{'color':'#303030','fontWeight':'100'}} >Olá, vamos começar ?</h1>
                        <form className="form-login-aprendiz" onSubmit={handleLogin}>
                                <input tupe="text" name="email" placeholder="Seu usuário" required />
                                <input tupe="password" name="password" placeholder="Sua senha" required />
                                <button type="submit">Entrar</button>
                        </form>
                        {/* <Link to="/aprendiz" style={{'display':'flex','flexDirection':'column','textDecoration':'none'}}>
                            <ButtonSecodary>
                                Vamos lá 
                                <img src={Arrow} height="25px" style={{'padding':10}} />
                            </ButtonSecodary>
                        </Link> */}
                    </div>
                </Content>
            </ContainerInt>
        </Container>

          
      </div>
  );
}

export default Login;
