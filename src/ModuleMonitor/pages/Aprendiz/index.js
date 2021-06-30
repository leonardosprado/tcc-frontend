import React from 'react'
import { Switch, useRouteMatch } from 'react-router'
import { PrivateRoute } from '../../routes/PrivateRoute'
import Aprendizes from './Aprendizes'
import CreateAprendiz from './CreateAprendiz';
import EditAprendiz from './EditAprendiz';

export default function Aprendiz() {
    let { path, url } = useRouteMatch();
    return (
        <Switch>
              <PrivateRoute exact path={`${path}`} component={Aprendizes} />
              <PrivateRoute path={`${path}/create-aprendiz/`} component={CreateAprendiz} />
              <PrivateRoute path={`${path}/editar-aprendiz/:id`} component={EditAprendiz} />
        </Switch>
    )
}
