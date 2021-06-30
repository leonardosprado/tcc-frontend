import styled from 'styled-components';

export const Container = styled.div`

    /* scrollbar-arrow-color:#001868!important;
    scrollbar-3dlight-color:transparent!important;
    scrollbar-highlight-color:#FF0000!important;
    scrollbar-face-color:#001868!important;
    scrollbar-shadow-color:#0000FF!important;
    scrollbar-darkshadow-color:#FFFF00!important;
    scrollbar-track-color:#00FF00!important; */
  display:flex;
  flex-direction:column;
  .title{
      color:#001868;
      cursor:pointer;
      font-weight:200;
      padding:10px 0px;
      margin-bottom:20px;
      /* box-shadow: 1px 1px 5px 0px #0000000d; */
      /* width:auto; */
      /* border: thin solid #bababa42; */
      /* border-radius: 9px; */
      width:fit-content;
  }
  .table{
      /* cursor:pointer; */
      /* width:fit-content; */
      border-radius:10px;
      padding:0px;
      border-collapse: collapse;
      height: 500px;
      box-shadow: 0 3px 36px rgb(0 0 0 / 9%);
      /* display:flex; */
      /* box-shadow: 1px 1px 5px 0px #0000000d; */
      /* border: thin solid #bababa42; */
      /* border-radius: 20px; */
      /* height:400px; */
      overflow:auto;
      scrollbar-color: red yellow;
      /* touch-action: manipulation; */
      -webkit-overflow-scrolling: touch; //deixa a rolagem suave


  }
  .table:hover{
      /* padding:15px; */
    
      /* box-shadow: 1px 1px 5px 0px #0000001a; */
  }
    table{
        width:700px;
        width:100%;
        /* display: block; */
        overflow:auto;
        height:100%;
        box-shadow: 1px 1px 5px 0px #0000000d; 
        border: thin solid #bababa42;
      
    }   

    thead, tbody{
        /* display: table-header-group; */
        /* display: block; */
    }
    thead, tbody, tfoot, tr, td, th {
        border-width: 1px;
    }
    thead tr{
        /* position:absolute; */
    }
    tbody {
        height: 400px;
        width:100%;
        max-width:800px;
        overflow-y: scroll;
        height: 100px;
        
    }
  table tr{
      border-bottom: thin solid #000;
      text-align:center;
      margin:20px;
      transition: 0.3s all ease;
      
  }
  table thead{
      background-color:#001868!important;
      color:#fff;
      /* display: block; */
      width:100%;
     
      /* position: sticky; */
      /* top: 0; */
      /* z-index: 999; */
  }
  table thead{
      background-color:#001868!important;
      color:#fff;
      /* position: sticky; */
      /* top: 0; */
      /* z-index: 999; */
  }
  table thead:hover{
      background-color:#001868!important;
      /* color:#fff; */
      /* position: sticky; */
      /* top: 0; */
      /* z-index: 999; */
  }
  
  table tr:first-child:hover{
    /* background-color:#0083ff!important; */
      /* color:#fff; */
  }
  table tr:first-child:hover{
      /* background-color:#0083ff; */
      
  }
  /* table tr:hover{
      background-color:#f7f9ff;
  } */
  table td{
      padding:15px;
  }
  table tr {
    border-bottom: thin solid #bababa42;
    margin:10px 0
  }
  table tr th{
      padding:15px;
  }
  .nameAtividade{
    color:#2794ff;
    font-weight:600;
  }
  .button-create{
      cursor:pointer;
      padding:10px;
      font-weight:900;
      color:#fff;
      /* margin-top:20px; */
      background-color:#001868;
      width:fit-content;
      align-self:flex-start;
      transition: 0.3s all ease;
      box-shadow: 1px 1px 5px 0px #0000001a;
      border: thin solid #bababa42;
      border-radius: 4px;
      text-decoration:none;

      
  }
  .button-create:hover{
      color:#001868;
      background-color:#00FFE5;
      box-shadow: 0 0 13px 0px #0000001a;
      
  }

  form {
      
      cursor:pointer;
      padding:15px;
      display:table;
      box-shadow: 1px 1px 5px 0px #0000000d;
      border: thin solid #bababa42;
      border-radius: 9px;

  }
  form input{
      padding:15px;
      margin:5px;
      border: thin solid #bababa42;
      width: 100%;
}

  }
  input[type="file" i]{
      cursor:pointer;
  }

  .preImg{
      object-fit:contain;
      width:auto;
      height:200px;
      margin:10px;
      padding-right:0;
      margin-right:0;
      align-self:flex-end;
      box-shadow: 1px 1px 5px 0px #0000000d;
      transition: 1s all ease;
  }

  @media(max-width:768px){
      font-size:12px;
    .table{
      width:100%;
  }
  }
`;
