import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

// import Main from '..pages/Home';

import Main from '../pages/Main';
import Login from '../pages/Login';
// import { Container } from './styles';
import Route from './Route';
import { PrivateRoute } from './PrivateRoute';

function RoutesMonitor() {
  let match = useRouteMatch();

  return (
      <Switch>
          <Route path={`${match.path}/login`}  component={Login} />
          <PrivateRoute path='/monitor' component={Main} />
      </Switch>
  );
}

export default RoutesMonitor;