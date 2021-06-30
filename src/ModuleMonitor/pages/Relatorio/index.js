import React from 'react'
import { Switch, useRouteMatch } from 'react-router'
import { PrivateRoute } from '../../routes/PrivateRoute'

import Dashboard from './Dashboard';
import RelatorioById from './RelatorioById';


export default function Monitor() {
    let { path, url } = useRouteMatch();
    
    return (
        <Switch>
              <PrivateRoute exact path={`${path}`} component={Dashboard} />
              <PrivateRoute path={`${path}/relatorio-id/:id`} component={RelatorioById} />
        </Switch>
    )
}