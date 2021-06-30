import styled from 'styled-components';


export const Sidbar = styled.div`
    height:60px;
    padding:10px 20px;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-bottom:thin solid #bababa42;
    transition:0.5s;
    .date{
        padding:10px 15px;
        border-radius:10px;
        background-color:#F2F2F2;
        color:#D2D2D2;

    }
    .date span{
        color:#001868;
    }

    @media(max-width:768px){
        justify-content:flex-end;
        font-size: 12px;
    }
`