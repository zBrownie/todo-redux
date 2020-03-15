import React from "react";
import api from "../../service/api";
import { Container, ListaTarefas } from "./styles";

import { MdArrowBack, MdDelete, MdDone,MdPlayArrow } from "react-icons/md";

export default function List({ tasks, action, deleteTask }) {
  return (
    <Container>
      <ul>
        {tasks.map(tarefa => (
          <ListaTarefas key={tarefa._id} complete={tarefa.completed}>
            <div className="textotask">{tarefa.task}</div>
            <div>
              <div className="buttonstask">
                <button onClick={() => action(tarefa._id)}>
                  {tarefa.completed ? (
                    <MdArrowBack size={24} />
                  ) : (
                    <MdDone size={24} />
                  )}
                </button>
                <button onClick={() => deleteTask(tarefa._id)}>
                  <MdDelete size={24} />
                </button>
              </div>
              <span className="nomeusuario">
                Tarefa por: {tarefa.userCreated}
                <br/>
                Fazendo: {tarefa.userDoing}
              </span>
              
            </div>
          </ListaTarefas>
        ))}
      </ul>
    </Container>
  );
}
