import React from 'react';
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

// import { Container } from './styles';

function Main({history}) {

    let match = useRouteMatch();

    function handleLogout() {
        localStorage.removeItem('@Letramento_monitor:JWT_TOKEN');
    
        history.push('/monitor/');
    }
    
  return (
      <Container>
        <Header />

        <div className="content">
            <Switch>
                <Route path={`${match.path}/atividades`} component={Atividades} />
                <Route path={match.path} component={Home} />
            </Switch>
        </div>
      </Container>
  );
}

export default Main;