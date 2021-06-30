import styled from 'styled-components';
import embacado from '../../../assets/img/embacado.png'
export const Head = styled.header`
   
    /* background:#f4f5f9; */
    background:#F4F9F6;
    padding: 0px 0px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    border-right:thin solid #bababa42;
    .logo{
        display:flex;
        justify-content:center;
        align-items:center;
        /* background:#fff; */
        height:60px;
        border-bottom:thin solid #bababa42;
        width:100%;
        /* padding:10px; */
        /* margin:10px; */
        /* box-shadow:0px 2px 3px -2px #61616180; */
    }
    .logo h2{
        color:#00b3f7;
        padding:0;
        font-weight:400;
        font-size:14pt;
        font-style:italic;
    }
    ul {
        padding:20px;
    }
    
    ul li{
        text-decoration:none;
        list-style:none;
        padding:10px;
        margin:10px 0;
        transition: all 0.2s ease;
        border-radius:8px;
        background-color:#fff;
        box-shadow: 0px 3px 27px rgb(120 120 120 /9%);
       
    }
    .is-active li{
        background-color:#41FFB9;
        box-shadow: 0 3px 27px #41ffb9a1;
    }
    ul li:hover{
        box-shadow: 0px 3px 27px rgb(65 255 185 /35%);
    }
    ul li:hover a{
        padding:0;
        text-decoration:none;
        /* color:#fff; */
    }
    ul a{
        text-decoration:none!important;
        color:#001868;
        font-weight:600;
        text-align:center;
        margin-bottom:20px;
        width:100%;
        display:block;
    }
    img{
        height: 170px;
        padding:5px;
    }
    button{
        cursor:pointer;
      padding:10px;
      font-weight:100;
      width:100%;
      color:#fff;
      margin-top:20px;
      background-color:#001868;
      /* width:fit-content; */
      transition: 0.6s all ease;
      box-shadow: 1px 1px 5px 0px #0000001a;
      border: thin solid #bababa42;
      border-radius: 9px;
    }

    button:hover{
      /* background-color:#aaff51; */
      box-shadow: 0 0 13px 0px #45454582;
      
    }

  @media(max-width:768px){
    display:none;
  }
  
  
 
`;

export const HeadMobile = styled.header`
    display:none;
    /* transform:translate(00px, 0px); */
    /* transform:translate(-300px, 0px); */
    position:absolute;
    left:0;

    /* background-color:#000; */
    

     @media(max-width:768px){
         display:block;
     }

     .header-mobile{

        position:absolute;
        top:60px;
        /* background:url(${embacado}); */
        background:#001868;
        /* background:#F4F5F953; */
        /* backdrop-filter:blur(15px); */
        border-right: thin solid #bababa42;
        transform: ${props=> props.menuSanduiche?'translate(0px, 0px)':'translate(-800px, 0px)'};
        transition: transform .55s cubic-bezier(.785, .135, .15, .86);
        /* transform:translate(-300px, -50px); */
        width:calc(100vw - 80px);
        height:calc(100vh - 60px);
        overflow: auto;
        z-index:50;
     }

     /* .header-mobile::before{
         content:'';
         z-index:-1;
         
         position:absolute;
         width:calc(100vw);
         height:100%;
         background:#00000083;

    } */
    .header-mobile-black{
        content:'';
        transform: ${props=> props.menuSanduiche?'translate(0px, 0px)':'translate(-800px, 0px)'};
        top:60px;
        background:#00000000;
        /* backdrop-filter:blur(5px); */
        position:absolute;
        width:calc(100vw);
        height:calc(100vh - 60px);
        transition: transform .8s cubic-bezier(.785, .135, .15, .86);
        z-index:5;
    }

     .burger {
        margin: -0 0;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 20px;
        left:0;
        padding: 5px 0;
        border-radius: 4px;
        cursor: pointer;
        z-index: 1001;
     }
     .burger span {
        position: relative;
        margin-top: 9px;
        margin-bottom: 9px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -1.5px;
    }

     .burger span::after, .burger span::before, .burger span {
        content: "";
        display: block;
        width: 30px;
        height: 3px;
        background-color: #000;
        outline: 1px solid transparent;
        -webkit-transition-property: background-color, -webkit-transform;
        -moz-transition-property: background-color, -moz-transform;
        -o-transition-property: background-color, -o-transform;
        transition-property: background-color, transform;
        -webkit-transition-duration: .3s;
        -moz-transition-duration: .3s;
        -o-transition-duration: .3s;
        transition: 0.5s all ease-in-out;
    }
    .burger span::after, .burger span::before, .burger span {
        content: "";
        display: block;
        width: 30px;
        height: 3px;
        background-color: #000;
        outline: 1px solid transparent;
        -webkit-transition-property: background-color, -webkit-transform;
        -moz-transition-property: background-color, -moz-transform;
        -o-transition-property: background-color, -o-transform;
        transition-property: background-color, transform;
        -webkit-transition-duration: .3s;
        -moz-transition-duration: .3s;
        -o-transition-duration: .3s;
        transition: 0.5s all ease-in-out;
    }

    .burger span:before, .burger span:after {
        position: absolute;
        content: "";
    }
    .burger span::before {
        top: -9px;
    }
    .burger span::after {
        top: 9px;
    }

    #control-nav:checked~.burger span {
        /* transition: 1.5s background ease-in-out; */
        transition: 0.5s width ease-in-out;
        /* background: transparent; */
        width: 0px;
    }


    #control-nav:checked~.burger span::before {
        -webkit-transform: translateY(9px) rotate(
        45deg
        );
            -moz-transform: translateY(9px) rotate(45deg);
            -ms-transform: translateY(9px) rotate(45deg);
            -o-transform: translateY(9px) rotate(45deg);
            transform: translateY(9px) rotate(
        45deg
        );
    }
    #control-nav:checked~.burger span::after {
    -webkit-transform: translateY(-9px) rotate(
        -45deg
        );
            -moz-transform: translateY(-9px) rotate(-45deg);
            -ms-transform: translateY(-9px) rotate(-45deg);
            -o-transform: translateY(-9px) rotate(-45deg);
            transform: translateY(-9px) rotate(
        -45deg
        );
    }


    .logo h2{
        color:#00b3f7;
        padding:0;
        font-weight:400;
        font-size:14pt;
        font-style:italic;
    }
    ul {
        padding:20px;
        
        /* background-color:#f4f5f9; */
    }
    ul a{
         text-decoration:none;
    }
    ul li{
        text-decoration:none;
        list-style:none;
        padding:10px;
        margin:10px 0;
        transition: all 0.2s ease;
        border-radius:8px;
        color:#fff;
        text-transform: uppercase;
    }
    ul li:hover{
        background-color: #000f40;
    }
    ul li:hover a{
        padding:0;
        text-decoration:none;
        /* color:#fff; */
    }
    ul li a{
        text-decoration:none;
        /* color:#626264; */
        color:#fff;
    }
    .is-active li{
        background-color:#41FFB9;
        box-shadow: 0 3px 27px #41ffb951;
        /* text-shadow: 0 0px 10px #001868db; */
        color:#001868;
        font-weight: 600;
    }

    button{
        cursor:pointer;
      padding:10px;
      font-weight:900;
      color:#470000;
      margin-top:20px;
      background-color:#ff2c2c;
      width:fit-content;
      transition: 0.6s all ease;
      box-shadow: 1px 1px 5px 0px #0000001a;
      border: thin solid #bababa42;
      border-radius: 9px;
    }

    button:hover{
      /* background-color:#aaff51; */
      box-shadow: 0 0 13px 0px #45454582;
      
    }

    img{
        padding:20px;
        height: 170px;
        /* padding:5px; */
    }
   
`;

