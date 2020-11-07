import React, { useEffect } from 'react';

// import { Container } from './styles';

function Page404({history}) {

    function handleLogin(){

        history.push('/');
    }
    useEffect(()=>{
        handleLogin();
    });
  return(
      <div>
          <h1>Redirect to page Home</h1>
      </div>
  );
}

export default Page404;