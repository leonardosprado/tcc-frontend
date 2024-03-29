import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import authService from '../services/auth-service';

// import {BrowserRouter  as Router,Switch, Route, Link} from "react-router-dom";

// import { Container } from './styles';

function RouteWrapper({
  redirectTo, isPrivate, compoent: Component, ...rest
}){

  const authenticated = localStorage.getItem('@Letramento_aprendiz:JWT_TOKEN');

  const autenticated = authService.verificarUserToken()
  // console.log(autenticated);
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
  redirectTo: '/login',
  isPrivate: false,
};

export default RouteWrapper;