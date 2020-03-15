import React, { useEffect } from "react";
import api from "../../service/api";

import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Field from "../../components/Field";
import List from "../../components/List";

import { InsertTask } from "../../redux/actions";

export default function Home() {
  const tasks = useSelector(state => state.tasks);
  const user = useSelector(state => state.userinfo);
  const dispatch = useDispatch();

  async function handleGetTasks() {
    await api.get("/").then(response => {
      dispatch(InsertTask(response.data));
    });
  }

  useEffect(() => {
    handleGetTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(newTask) {
    if (Object.keys(user).length === 0) {
      alert("Logar Primeiro!");
    }

    await api
      .post("/task", { task: newTask, userName: user.name })
      .finally(promise => {
        handleGetTasks();
      });
  }

  async function handleCompleteTask(id) {
    if (Object.keys(user).length === 0) {
      alert("Logar Primeiro!");
    }
    let data = {
      _id: id,
      userdoing: user.name,
      completed: 1
    };
    await api
      .put("/task", data)
      .then(response => {
        console.log(response);
      })
      .finally(promise => {
        handleGetTasks();
      });
    // let taskArray = Array.from(tasks);
    // let selectedTask = taskArray.filter(task => task.id === id);
    // selectedTask[0].completed = !selectedTask[0].completed;

    // dispatch(UpdateTask(taskArray));
  }

  async function handleDeleteTask(id) {
    if (Object.keys(user).length === 0) {
      alert("Logar Primeiro!");
    }

    await api
      .delete(`/task/${id}`)
      .then(response => {
        console.log(response);
      })
      .finally(promise => {
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
