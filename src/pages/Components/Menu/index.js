import React, { useEffect, useState } from 'react'
import authService from '../../../services/auth-service';
import { Container } from './styles'

export default function Menu() {

    const [user, setUser] = useState('');


    
    async function requisicaoGetCurrentUser(){
        const response = await authService.getCurrentUserDataById();
        await setUser(response)
        console.log(response);
    }

    useEffect(()=>{
        requisicaoGetCurrentUser();
      },[])
    return (
        <Container>
            <div>
                <h1>{user.login}</h1>
            </div>
            <div>

            </div>
        </Container>
    )
}
