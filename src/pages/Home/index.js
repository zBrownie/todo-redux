import React, { useState, useEffect } from "react";
import api from "../../service/api";

import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Field from "../../components/Field";
import List from "../../components/List";

import { InsertTask, UpdateTask, DeleteTask } from "../../redux/actions";

export default function Home() {
  const tasks = useSelector(state => state.tasks);
  const user = useSelector(state => state.userinfo);
  const dispatch = useDispatch();

  //   const [taskState, settaskState] = useState([tasks]);

  async function handleGetTasks() {
    await api.get("/").then(response => {
      dispatch(InsertTask(response.data));
      console.log("dispatch");
    });
  }

  useEffect(() => {
    handleGetTasks();
  }, []);

  async function handleSubmit(newTask) {
    if (Object.keys(user).length === 0) {
      alert("Logar Primeiro!");
    }
    
    await api
      .post("/task", { task: newTask, userID: user._id })
      .finally(promise => {
        handleGetTasks();
      });
    // dispatch(InsertTask(''))
  }

  function handleCompleteTask(id) {
    let taskArray = Array.from(tasks);
    let selectedTask = taskArray.filter(task => task.id === id);
    selectedTask[0].completed = !selectedTask[0].completed;
    // settaskState(taskArray);

    dispatch(UpdateTask(taskArray));
  }

  async function handleDeleteTask(id) {
    await api.delete("/task", id).finally(promise => {
      handleGetTasks();
    });
  }

  return (
    <Container>
      <Field newTask={handleSubmit} />
      <List
        tasks={tasks}
        action={handleCompleteTask}
        deleteTask={handleDeleteTask}
      />
    </Container>
  );
}
