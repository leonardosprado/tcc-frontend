import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Main from '..pages/Home';

import Main from '../pages/Main';
// import { Container } from './styles';
// import Route from './Route';
import RoutesMonitor from '../ModuleMonitor/routes';
import Home from '../pages/Home';
import Page404 from '../pages/404';
import { PrivateRoute } from './PrivateRoute';

function Routes() {
  return (
      <Switch>
          <PrivateRoute path="/" exact component={Home} isPrivate />
          <Route path="/login" exact component={Main}  />
          {/* <Route path="/aprendiz" component={LoginAprendiz} /> */}
          <Route path="/monitor"  component={RoutesMonitor} />
          <Route path="*" component={Page404} />
      </Switch>
  );
}

export default Routes;