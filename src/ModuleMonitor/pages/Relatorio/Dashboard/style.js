import styled from 'styled-components';

export const FormSearch = styled.form`
  position: relative;
  max-width: 200px;
  /* border: thin solid #bababa42; */
  padding: 0px;
  margin: 20px 5px;
  :focus-visible:focus-visible{
    border: thin solid #bababa42;
  }

  svg{
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(5px, -50%);
  }

  @media(max-width:768px){
    max-width: 100%;
  }
`;
export const InputSearch = styled.input`

    width: 100%;
    /* margin: 20px 0; */
    padding: 10px;
    padding-left: 45px;
    /* padding: 15px; */
    /* border: thin solid transparent; */
    border: thin solid #bababa42;
    background-color: #f3f3f4;
    transition: 0.3s;
    border-radius: 10px;

  
  :hover{
    background-color: #fff;
    border-color: rgba(0,0,0,0.1);
    /* -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%); */
    box-shadow: 0 0 0 4px rgb(0 255 229 / 10%);
  }

  :focus-visible:focus-visible{
    outline-offset: none;
    outline:none;
    box-shadow: 0 0 0 4px rgb(0 255 229 / 10%);
    border: thin solid rgb(0 255 229);
    /* border-color: #dadada; */
    background-color: #fff;
  }
  @media(max-width:768px){
    width: 100%;
  }
`;
export const ContainerDashBoard = styled.div`
    display: flex;
    overflow: auto;

    .search{
      background-color:#bababa42 ;
    }

    .n-realizada{
      background-color:#ff2020!important;
      color:#fff!important;
    }
    .n-realizada a{
      color:#000000
    }

    @media(max-width:768px){
        /* flex-direction: column-reverse; */
      flex-direction: column;

        .atividade-realizada{
          /* height: 200px; */
        }
        .atividade-n-realizada{
          /* height: 200px; */
        }
        .atividade-n-realizada ul li{
            font-size: 8pt;   
            width: calc(100% - 30px)!important;
        }
    }

  /* input{
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-color: #00FFE5;
    outline-offset: none;
    transition: all 0.3s ease ;
    border-radius: 8px;
  }
  input:focus-visible:focus-visible{
    outline-offset: none;
    outline:none;
    border-color: #dadada;
  } */
  .atividade-n-realizada{
      padding: 20px 10px;
      border-radius: 10px;
  }
  .atividade-n-realizada ul{
      padding: 10px;
      position: relative;

  }
  .atividade-n-realizada ul::before{
    content: "";
    height: 100%;
    width: 2px;
    position: absolute;
    left: 0;
    top: 0;
    background: #BBBBBB;
  }
  .atividade-n-realizada ul li::before {
    content: "";
    height: 2px;
    width: 100px;
    background: #bbb;
    position: absolute;
    top: 50%;
    left: -20px;
    z-index: -1;
  }
  .atividade-n-realizada ul li{
      list-style: none;
      color:#001868;
      background-color: #A2FF00;
      box-shadow: 0 3px 27px rgba(52,255,0,.16)  ;
      margin: 20px 10px;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: 600;
      position: relative;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.4s;
      box-shadow: 0px 3px 10px transparent;
  }
  .atividade-n-realizada ul li span{
    color: #001868;
    background: #fff;
    /* padding: 10px; */
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    font-weight: 400;
    transition: 0.4s;
    font-size: 20px;
    font-family: arial;
    
  }
  .atividade-n-realizada ul li:hover{
   
    box-shadow: 0px 3px 1px #001868;
  }
  }
  .atividade-n-realizada ul li:hover span{
    color: #fff;
    background:#001868;
    transform: rotate(360deg);
  }
  .atividade-n-realizada ul .long::before {
    left: -40px!important;
  }
  .atividade-n-realizada ul .long{
      margin-left: 30px;
     
  }
  .atividade-n-realizada a{
      text-decoration: none;
  }
  
  .atividade-n-realizada .title{
      color:#000;
      text-align:center;
  }
  
  /*  */
  .atividade-realizada{
      background-color:#001868 ;
      padding: 20px 10px;
      border-radius: 10px;
      height: 50vh;
      overflow: auto;
  }
  .atividade-realizada .title{
      color:#fff;
      text-align:center;
  }
  .atividade-realizada ul{
      padding: 0;
  }
  .atividade-realizada a{
      text-decoration: none;
  }
  .atividade-realizada ul li{
      list-style: none;
      color:#001868;
      background-color: #A2FF00;
      box-shadow: 0 3px 27px rgba(52,255,0,.16)  ;
      margin: 20px 10px;
      padding: 10px;
      border-radius: 10px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      cursor: pointer;
      white-space: nowrap;
      transition: 0.4s;
   
  }
  .atividade-realizada ul li:hover{
    box-shadow: 0px 3px 1px #fff;
  }

  .atividade-realizada ul li span{
    color: #001868;
    background: #fff;
    /* padding: 10px; */
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    font-weight: 400;
    transition: 0.4s;
    font-size: 20px;
    font-family: arial;
    
  }
  .atividade-realizada ul li:hover span{
    color: #fff;
    background:#001868;
    transform: rotate(360deg);
  }
`