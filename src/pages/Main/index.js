import React from 'react';

import { Container,Image,Header, HeaderInt, Button,Logo, ButtonSecodary,Content,ContainerInt } from './styles';
import ImageLetramento from '../../assets/img/image-letramento.jpeg'
import Arrow from '../../assets/img/redo.svg'
import { Link } from 'react-router-dom';

import './style.css';

function Main({history}) {

     function handleLogin(){
        localStorage.setItem("@Letramento:JWT_TOKEN",'seutoken');

        history.push('/home');
    }
    
  return (
    <div class="main">
        <Header>
            <HeaderInt>
                <Logo>Apoio ao Letramento</Logo>
                <Link to="/monitor" style={{'textDecoration':'none'}}>
                  
                    <Button>Entrar como Monitor</Button>
                </Link>
            </HeaderInt>
        </Header>
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
                                <button class="buttonSecodary" type="submit">Entrar   <img src={Arrow} height="25px" style={{'padding':10}} /></button>
                        </form>
                        {/* <Link to="/aprendiz" style={{'display':'flex','flexDirection':'column','textDecoration':'none'}}>
                            <ButtonSecodary>
                                Vamos lá 
                              
                            </ButtonSecodary>
                        </Link> */}
                    </div>
                </Content>
            </ContainerInt>
        </Container>

        <div className="footer">
            <p>2020 - Desenvolvido por Leonardo Prado </p>
        </div>
    </div>
  );
}

export default Main;