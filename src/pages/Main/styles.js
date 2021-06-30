import styled from 'styled-components';

export const Container = styled.div`
  /* max-width:1200px; */
  /* height:80vh; */
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  background-color:#fefefe;

  .main-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        /* border: thin solid rgb(228, 228, 228) ; */
        position: relative;
    }
    .main-content::before{
        content: "";
        position: absolute;
        left: 5%;
        top: 20%;
        height: 70%;
        width: 0.5px;
        background:rgb(204, 204, 204) ;
    }

`;
export const ContainerInt = styled.div`
  max-width: 1200px;
  margin:15px;
  width: 100%;
  height: 100%;
  border-radius:8px;
  height: 600px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;

  background-color:#f7f7f7;
  
  box-shadow: 0 0 34px 1px #95959570;

  @media(max-width:800px){
      flex-direction:column;
      /* height: 100%; */

      /* .main-content::before{
        content: "";
        position: absolute;
        left: 100px;
        top: 30%;
        height: 0%;
        width: 1px;
        background:rgb(204, 204, 204) ;
    } */
  }
`;


export const Content = styled.div`
    background: url('${props => props.Background}');
    width:50%;
    height:100%;
    padding:0px;
    background-size:cover;

    form{
        display:flex;
        flex-direction:column;
        width:100%;
        padding:0px 50px;
    }
    form input{
        margin:9px;
        /* width:100%; */
        padding:20px;
        border:thin solid #efefef;
        transition: all 0.5s ease-in;

        border-radius: 8px;
    }
    form input:focus{
        outline:none;
        /* border:none; */
        border:thin solid #efefef;
    }
    form .buttonSecodary{
        background-color: #001868;
        border:none;
        text-align:center;
        padding: 10px 40px;
        border-radius: 8px;
        font-weight:600;
        color:#fff;
        text-decoration:none;
        transition: all 0.4s ease-in;
        /* font-size:38px; */
        margin:9px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
    }
    form .buttonSecodary:hover{
       
        background-color: #1d1df9;
    
    }
    form .buttonSecodary:focus{
       
        border:none;
        outline: none;
    }
    form span{
        text-align:center;
        color:#001868;
    }
   

    @media(max-width:800px){
        width:100%;
     
    }

`

export const Image = styled.img`

    height:300px;
    margin:10px;
    border-radius:50px;

    box-shadow: 0 0 18px 1px #95959570;
    transition: all 0.4s ease-in;

    &:hover{
        box-shadow: 1px 1px 15px #959595;
    }
`;
export const Header = styled.header`
   background-color:#00b3f7;
   display:flex;
   justify-content:center;
   margin-bottom:20px;
   @media(max-width:800px){
        margin-bottom: 0px;
   }
`;

export const HeaderInt = styled.div`
    max-width:1200px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    color:#fff;
    @media(max-width:800px){
      padding: 10px;
       /* flex-direction:column; */
   }
`

export const Button = styled.a`
    background-color: #001868;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight:600;
    color:#fff;
    text-decoration:none;
    transition: all 0.1s ease-in;
    display:block;


    &:hover{
        background-color: #00FFE5;
    }
    
`;

export const ButtonSecodary = styled.a`
    background-color: #4141ff;
    text-align:center;
    padding: 5px 40px;
    border-radius: 50px;
    font-weight:600;
    color:#fff;
    text-decoration:none;
    transition: all 0.4s ease-in;
    /* font-size:38px; */
    
    display:flex;
    align-items:center;
    &:hover{
        background-color: #1d1df9;
    }
    
`;
export const Logo = styled.div`
    img{
        height:40px;
        object-fit:contain;
    }

`;