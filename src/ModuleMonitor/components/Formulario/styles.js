import styled from 'styled-components';

export const Formulario = styled.form`
  
  .form-row{
      display:flex;
      flex-wrap: nowrap;
  }
  .form-column{
      display:flex;
      flex-direction:column;
      padding:5px;
      width:100%;
  }
  label{
      padding:5px;
      color:#001868;
      font-weight:600;
  }
  input{
      padding:10px;
      background-color:#f4f5f9;
      border: 1px solid #F4F9F6;
      transition: 0.4s;
  }
  input:focus-visible{
      outline:none;
  }
  input:focus{
    border: 1px solid #001868;
  }
  select{
    padding:10px;
    background-color:#f4f5f9;
    border: 1px solid #F4F9F6;
    transition: 0.4s;
  }
  select:focus-visible{
      outline:none;
  }
  select:focus{
    border: 1px solid #001868;
  }
  .button{
    padding:10px;
    background-color:#001868;
    border: 1px solid #F4F9F6;
    transition: 0.4s;
    color:#fff;
    border-radius:2px;
    margin:15px 0;
  }
  .button:hover{
    color:#001868;
    background-color:#41FFB9;
   
  }
  @media(max-width:768px){
    .form-row{
      flex-direction:column;
    }
  }
`;
