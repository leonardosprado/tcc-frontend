import React from 'react'
import { Switch, useRouteMatch } from 'react-router'
import { PrivateRoute } from '../../routes/PrivateRoute'
import Monitores from './Monitores';
import CreateMonitor from './CreateMonitor'                    
import EditMonitor from './EditMonitor';


export default function Monitor() {
    let { path, url } = useRouteMatch();
    return (
        <Switch>
              <PrivateRoute exact path={`${path}`} component={Monitores} />
              <PrivateRoute path={`${path}/criar-monitor/`} component={CreateMonitor} />
              <PrivateRoute path={`${path}/editar-monitor/:id`} component={EditMonitor} />
        </Switch>
    )
}