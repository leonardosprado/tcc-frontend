import styled from 'styled-components';

export const Head = styled.header`
   
    background:#f4f5f9;
    padding: 0px 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    .logo{
        background:#fff;
        padding:10px;
        margin:10px;
        box-shadow:0px 2px 3px -2px #61616180;;
    }
    .logo h2{
        color:#00b3f7;
        padding:0;
        font-weight:400;
        font-size:14pt;
        font-style:italic;
    }
    ul {
        padding:10px;
    }
    
    ul li{
        text-decoration:none;
        list-style:none;
        padding:10px;
        margin:10px 0;
        transition: all 0.2s ease;
    }
    ul li:hover{
        background:#000;
    }
    ul li:hover a{
        padding:0;
        text-decoration:none;
        color:#fff;
    }
    ul li a{
        text-decoration:none;
        color:#626264;
    }
    img{
        height: 170px;
        padding:5px;
    }
 
`;
