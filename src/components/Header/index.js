import React, { useState } from "react";
import api from "../../service/api";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { GetUser, GetToken } from "../../redux/actions";

export default function Header() {
  const dispatch = useDispatch();
  // const token = useSelector(state => state.token);
  const user = useSelector(state => state.userinfo);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handleLogin() {
    let data = {
      email,
      password
    };
    await api.post("/auth", data).then(response => {
      dispatch(GetToken(response.data.token));
      dispatch(GetUser(response.data.user));
    });
  }

  async function handleLogout() {
    dispatch(GetToken(""));
    dispatch(GetUser({}));
  }

  async function handleRegister() {
    let data = {
      email,
      password
    };
    await api.post("/user", data).then(response => {
      dispatch(GetToken(response.data.token));
      dispatch(GetUser(response.data.user));
    });
  }

  return (
    <Container>
      <div className="logo">ToDo</div>
      {Object.keys(user).length === 0 ? (
        <div className="arealogin">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div className="usuario">
          <p>{user.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </Container>
  );
}
