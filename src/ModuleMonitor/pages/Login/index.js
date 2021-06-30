import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ContainerInt, Content, Header, HeaderInt, Logo } from '../../../pages/Main/styles';

import ImageLetramento from '../../../assets/img/teacher-board.png';
import LogoImg from '../../../assets/img/logo.png';
import Arrow from '../../../assets/img/redo.svg';

import AuthService from '../../services/auth.service';


// import { Container } from './styles';

function Login({history}) {

    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const[loading,setLoading] = useState(false);

    const[message,setMessage] = useState('');

    useEffect(() => {
        // document.title = "Login Monitor"
    }, [])
      

    function handleLogin(e){
        e.preventDefault();
        setLoading(true);
        
        AuthService.login(username,password).then(
            ()=>{
                history.push('/monitor/');
            },
            error=>{
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
                setLoading(false);
            }
        );
        setLoading(false);
        // localStorage.setItem("@Letramento_monitor:JWT_TOKEN",'seutoken');
    }

  return (
    <div class="main">
        <Header>
            <HeaderInt>
                <Logo>   
                    <img src={LogoImg} alt="Logo" />

                </Logo>
                <Link to="/" style={{'textDecoration':'none'}}>
                
                    <Button>Entrar como Aprendiz</Button>
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
                        <h3 style={{'color':'#001868','fontWeight':'100'}}>Bem vindo Monitor</h3>
                        <h1 style={{'color':'#001868','fontWeight':'100'}} >Olá, vamos começar ?</h1>
                        <form className="form-login-aprendiz" onSubmit={handleLogin}>
                                <input type="text" onChange={(e)=> setUsername(e.target.value) } value={username} name="email" placeholder="Seu usuário" required />
                                <input type="password" onChange={(e)=> setPassword(e.target.value) } value={password} name="password" placeholder="Sua senha" required />
                                <button  class="buttonSecodary" type="submit">Entrar   <img src={Arrow} height="25px" style={{'marginLeft':5}} /></button>

                                <span>{loading?'Entrando':'...'}</span>
                                <span>{message}</span>
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

export default Login;
