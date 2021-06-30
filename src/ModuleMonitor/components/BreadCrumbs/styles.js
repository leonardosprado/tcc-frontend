import styled from "styled-components";

export const Component = styled.div`
    display:flex;
    /* background-color:#F4F9F6; */
    background-color:#001868;
    padding:20px;
    border-radius:10px;
    margin-bottom:15px;
    li::after{
        content:">";
        padding: 0 10px;
    }
    li{
        list-style:none;
        /* color:#001868; */
        color:#ffffff;
        font-weight:600;
    }
    li:last-child a{
        /* color:#686868; */
        color:#00FFE5;
        font-weight:700;
    }
    li:last-child::after{
        content:"";
        padding: 0 0px;
    }
    a{
        /* color:#001868; */
        color:#fff;
        text-decoration:none;
    }
    @media(max-width:768px){
        a{
            font-size: 10px;
        }
    }
`