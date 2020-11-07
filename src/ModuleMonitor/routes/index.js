import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

// import Main from '..pages/Home';

import Main from '../pages/Main';
import Login from '../pages/Login';
// import { Container } from './styles';
import Route from './Route';

function RoutesMonitor() {
  let match = useRouteMatch();

  return (
      <Switch>
          <Route path={`${match.path}/login`}  component={Login} />
          <Route path='/monitor' component={Main} isPrivate />
      </Switch>
  );
}

export default RoutesMonitor;