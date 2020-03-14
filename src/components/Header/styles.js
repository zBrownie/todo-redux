import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;

  background: #23231f;
  color: #fff;

  font-size: 18px;
  font-weight: bold;

  display: flex;
  align-items: center;

  padding: 8px 22px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .arealogin {
    input {
      padding: 8px 16px;
      border: 0;
      margin: 0 8px;
    }

    button {
      padding: 8px 16px;
      border: 1px solid #ffffff99;
      background: transparent;
      color: #fff;
      font-weight: bold;
    }
  }

  .usuario {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      color: #fff;
      font-size: 18px;
      margin:0 9px;
    }

    button {
      padding: 8px 16px;
      border:0;
      background: transparent;
      font-size: 18px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
