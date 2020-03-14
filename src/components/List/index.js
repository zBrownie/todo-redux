import React from 'react';

import { Container, ListaTarefas } from './styles';

import {MdArrowBack,MdDelete,MdDone} from 'react-icons/md'

export default function List({ tasks, action, deleteTask }) {
  return (
    <Container>
      <ul>
        {
          tasks.map(tarefa => <ListaTarefas key={tarefa._id} complete={tarefa.completed} >
            <div >
              {
                tarefa.task
              }

            </div>
            <button onClick={() => action(tarefa._id)}>{
              tarefa.completed ? <MdArrowBack size={24}/> : <MdDone size={24}/>
            }</button>
            <button onClick={() => deleteTask(tarefa._id)}><MdDelete size={24}/></button>
          </ListaTarefas>)
        }
      </ul>
    </Container>
  );
}
