import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  Header{
    min-height:100vh;
  }

  .content{
     padding:25px;
     height: calc(100vh - 60px);
     overflow: auto;
  }

  @media(max-width:768px){
    /* overflow:hidden; */
    .content{
      padding:10px;
    }
  }
`;
