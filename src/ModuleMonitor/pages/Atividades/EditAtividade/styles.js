import styled from "styled-components";

export const Container = styled.div`

    img{
        width: auto;
        height: 300px;
        object-fit: contain;
        text-align: left;
    }

    @media(max-width:768px){
        img{
            width: 100%;
        }
    }
`