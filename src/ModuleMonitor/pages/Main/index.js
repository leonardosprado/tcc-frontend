import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Header from '../../components/Header';
import Home from '../Home';
import Atividades from '../Atividades';
import { Container } from './styles';
import PageCriarAtividade from '../Atividades/CriarAtividade';
import Sidebar from '../../components/Sidebar';
import PageEditAtividade from '../Atividades/EditAtividade';
import MinhaConta from '../MinhaConta';
import { PrivateRoute } from '../../routes/PrivateRoute';
import AtribuirAtividade from '../Atividades/AtribuirAtividade';
import Aprendiz from '../Aprendiz';
import Monitor from '../Monitor';
import Relatorio from '../Relatorio';

// import { Container } from './styles';

function Main({history},props) {

    let match = useRouteMatch();

    useEffect(()=>{
      document.title = "Gerenciador"

  },[])
 
    
  return (
      <Container>
        <Header />
 
        <div className="w-100">
          <Sidebar />
          <div className="content">
            <Switch>
                <PrivateRoute path={`${match.path}/atividades`} component={Atividades} />
                <PrivateRoute path={`${match.path}/criar-atividade`} component={PageCriarAtividade} />
                <PrivateRoute path={`${match.path}/editar-atividade/:id`} component={PageEditAtividade} />
                <PrivateRoute path={`${match.path}/minha-conta/`} component={MinhaConta} />
                <PrivateRoute path={`${match.path}/atribuir-atividade/`} component={AtribuirAtividade} />
                <PrivateRoute path={`${match.path}/aprendiz`}>
                  <Aprendiz/>
                </PrivateRoute>
                <PrivateRoute path={`${match.path}/monitor`}>
                  <Monitor />
                </PrivateRoute>
                <PrivateRoute path={`${match.path}/relatorio`} >
                  <Relatorio/>
                </PrivateRoute>
                <PrivateRoute path={match.path} component={Home} />
            </Switch>
          </div>
        </div>
      </Container>
  );
}

export default Main;