import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  
  ul{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
  }

  @media (max-width:450px){
      ul{
        grid-template-columns: 1fr;
      }
  }

`;


export const ListaTarefas = styled.li`
  list-style:none;
  width: 100%;
  padding: 16px;
  background: ${props => (props.complete ? '#A0DB8E': '#00000009')};
  font-size:18px;
  font-weight:bold;

  button{

      border:0;
      background:transparent;
      margin: 8px 12px;
      color:#fff;
      font-weight:bold;
  }

`