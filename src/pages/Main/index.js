import React, { useEffect, useState } from 'react';
import { Container,Image,Header, HeaderInt, Button,Logo, ButtonSecodary,Content,ContainerInt } from './styles';
import ImageLetramento from '../../assets/img/image-letramento.jpeg'
import Arrow from '../../assets/img/redo.svg'
import { Link,Redirect } from 'react-router-dom';

import LogoImg from '../../assets/img/logo.png';

import './style.css';
import authService from '../../ModuleMonitor/services/auth-service';

function Main({history,props}) {


    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[login,setLogin] = useState(false);
    const[loading,setLoading] = useState(false);

    const[message,setMessage] = useState('');

    useEffect(()=>{ 
        console.log(authService.getCurrentUser())
    },[])

    async function handleLogin(e){
        e.preventDefault();
        try {
            setLoading(true);
            await authService.loginAprendiz_Novo(username,password);
            setLoading(false);
            
            history.push('/home');
            // window.location.reload(true);
            // props.history.go();
            // console.log(response);
        } catch (error) {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            setMessage(resMessage);
            setLoading(false);
        }
        
        // authService.loginAprendiz(username,password).then(
        //     ()=>{
        //         history.push('/home');
        //     },
        //     error=>{
        //         const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        //         setMessage(resMessage);
        //         setLoading(false);
        //     }
        // );
    
        // localStorage.setItem("@Letramento_monitor:JWT_TOKEN",'seutoken');
    }

    
  return (
    <div class="main">
        <Header>
            <HeaderInt>
                <Logo>  <img src={LogoImg} alt="Logo" /></Logo>
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
                                <input tupe="text" onChange={(e)=> setUsername(e.target.value) } value={username}  name="email" placeholder="Seu usuário" required />
                                <input tupe="password"  onChange={(e)=> setPassword(e.target.value) } value={password} name="password" placeholder="Sua senha" required />
                                <button className="buttonSecodary" type="submit">Entrar   <img src={Arrow} height="25px" style={{'padding':10}} /></button>

                                <span>{loading?'Entrando':''}</span>
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

export default Main;