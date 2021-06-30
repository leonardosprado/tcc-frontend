import styled from 'styled-components';

export const Loading = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @keyframes flash {
        0%{
            opacity:1
        }
        100%{
            opacity:0.7
        }
    }

    h1{
        text-align:center;
        animation: flash 1s infinite;
    }
    img{
        height: 100px!important;
        object-fit: contain;
    }
    
`;
export const Container = styled.div`
    /* display:flex; */
    /* max-width: 1920px; */
    background:url(${(props)=>props.Bg});
    background-repeat: no-repeat;
    background-size: cover;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px;
    background-color:#f1f1f1;
    min-height: 100vh;
    overflow:hidden;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */


    .linha-do-topo{
        min-height: 50vh;
    }
    .not-responsive{
        flex-direction:row!important;
    }
`;

export const Row = styled.div`
    display:flex;
    margin:10px;
    position: relative;
    /* align-items:center; */
    /* height: 100%; */
    background:#f1f1f1;
    @media(max-width:768px){
        flex-direction:column;
    }
    
`;
export const Figura = styled.div`
    display:flex;
    width:50%;
    /* align-items:center; */
    justify-content:center;
   
    img{
        width:100%;
        height: 100%;
        /* height:300px; */
        /* object-fit:contain; */
        object-fit: cover;

   
    }
    @media(max-width:768px){
        width:100%;
        justify-content:flex-start;
        align-self: flex-start;
        img{
            width:100%;
            height:130px;
            object-fit:contain;
        }
    }
`;

export const Gif = styled.div`
    width: 50%;
    /* background-color: #000; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        /* padding:15px; */
        width:200px;
        height: 200px;
        /* height:300px; */
        object-fit:cover;
        border-radius:100%;
   
    }
    @media(max-width:768px){
        width: fit-content;
        height: fit-content;
        position:fixed;
        left: 10px;
        bottom: 10px;
        img{
            width:100px;
            height: 100px;
          
   
        }
    }
`;

export const Wip = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    background:#f1f1f1;
    border:1px solid #f5f5f5;
    padding:1rem;
    margin:10px;
    /* height: 400px; */
    /* height: fit-content; */
    width:50%;
    @media(max-width:768px){
        width:100%;
        height: fit-content;
    }
`;


export const Complete = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#bac9ff;
    height:300px;
    padding:1rem;
    margin:10px;
    
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

export const Save = styled.div`
    font-family: 'Roboto', cursive;
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 100px;
    height: 100px;
    background-color: #4500ff;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 70% 0px 70% 0px;
    z-index: 100;
    transition: 0.4s;
    cursor: pointer;
    box-shadow: 1px 1px 5px #000;
    :hover{
        background-color: #412294;
    }
`


export const Finish = styled.div`
    position: relative;
    
    .confete{
        position: absolute;
        left:calc(50% - 150px);
        bottom: 0;
    }

`