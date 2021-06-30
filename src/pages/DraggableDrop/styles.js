import styled from 'styled-components';

export const Texto = styled.div`
    
    font-family: 'Dancing Script', cursive;
    font-size:5rem;
    
    @media(max-width:768px){
        font-size:75px;
        max-width:100%;
    }

  
`;

export const AreaWip = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f1f1f1;
    padding:1rem;
`;

export const AreaComplete = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#bac9ff;
    height:300px;
    padding:1rem;
`;
