import React from 'react';

import { Container, ListaTarefas } from './styles';

export default function List({ tasks, action, deleteTask }) {
  return (
    <Container>
      <ul>
        {
          tasks.map(tarefa => <ListaTarefas key={tarefa.id} complete={tarefa.completed} >
            <div >
              {
                tarefa.task
              }

            </div>
            <button onClick={() => action(tarefa.id)}>{
              tarefa.completed ? 'Voltar' : 'Feito'
            }</button>
            <button onClick={() => deleteTask(tarefa.id)}>DEL</button>
          </ListaTarefas>)
        }
      </ul>
    </Container>
  );
}
