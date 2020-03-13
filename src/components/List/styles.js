import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 100px;
  flex:1;
  ul{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    gap:20px;
  }

  

`;


export const ListaTarefas = styled.li`
  list-style:none;
  width: 100%;
  padding: 16px;
  background: ${props => (props.complete ? '#A0DB8E': '#fafafa')};
  font-size:18px;
  font-weight:bold;
  border: 1px solid #000000;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
  border-radius:5px;
  button{

      border:0;
      background:transparent;
      margin: 8px 12px;
      color:#23231f;
      font-weight:bold;
  }

`