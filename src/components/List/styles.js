import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 100px;
  flex: 1;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
`;

export const ListaTarefas = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 16px;
  background: ${props => (props.complete ? "#A0DB8E" : "#fafafa")};

  border: 1px solid #00000066;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .textotask {
    font-size: 18px;
    font-weight: bold;
  }

  .buttontask {
    button {
      background: #000;
      border: 0;
      margin: 8px 12px;
      font-weight: bold;
    }
  }
  .nomeusuario {
    align-self: flex-end;
    font-weight: 500;
    font-size: 10px;
    color: #000000aa;
    margin-left: 8px;
  }
`;
