import React, { useEffect, useState } from "react";
import {Redirect,Route} from 'react-router-dom';
import authService from '../services/auth-service';
export const PrivateRoute = ({ component:Component, ...rest })=>{
    const [authenticated,setAuthenticated]=useState(true);

    useEffect(()=>{
        console.log(verificationToken());
    },[])

    async function verificationToken(){
        const verificar = await authService.verificarUserToken();
        if(verificar===false){
            authService.logout();
        }
        setAuthenticated(verificar);
    }
    return(
        <Route 
        {...rest}
        render={props=>
            authenticated ? 
            (<Component {...props} />):
            (<Redirect to={{
                pathname:"/login",
                state:{from:props.location}
            }}
            />
            )
            
        }
        />
    )
}