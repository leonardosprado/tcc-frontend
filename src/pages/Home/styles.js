import styled from 'styled-components';

export const Container = styled.div`
    /* display:flex; */
    padding:2rem;
    background:#fff;
    overflow:hidden;
`;

export const Wip = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f1f1f1;
    padding:1rem;
    height: 400px;
`;


export const Complete = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#bac9ff;
    height:300px;
    padding:1rem;
`;


export const Letter = styled.div`
    font-family: 'Dancing Script', cursive;
    font-size:5rem;
    background:transparent; 
    user-select: none;
    font-size:3rem;
    margin:0rem;  background:transparent; 
    user-select: none; 
`