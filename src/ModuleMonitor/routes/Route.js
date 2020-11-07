import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route,useRouteMatch } from 'react-router-dom';
// import {BrowserRouter  as Router,Switch, Route, Link} from "react-router-dom";

// import { Container } from './styles';

function RouteWrapper({
  redirectTo, isPrivate, compoent: Component, ...rest
}){
 
  const authenticated = localStorage.getItem('@Letramento_monitor:JWT_TOKEN');

  if(!authenticated && isPrivate ) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={props=> <Component {...props} /> } />
}


RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/monitor/login',
  isPrivate: false,
};

export default RouteWrapper;