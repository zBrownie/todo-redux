import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux'
import Field from '../../components/Field';
import List from '../../components/List';

import { InsertTask, UpdateTask, DeleteTask } from '../../redux/actions'

export default function Home() {

    const [taskState, settaskState] = useState([]);

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()


    function handleSubmit(newTask) {
        let dataJson = {
            'id': Math.floor(Math.random() * 9999),
            'task': newTask,
            'completed': false
        }

        // taskState.push(dataJson)

        dispatch(InsertTask(dataJson))
    }

    function handleCompleteTask(id) {
        let taskArray = Array.from(tasks)
        let selectedTask = taskArray.filter(task => task.id === id)
        selectedTask[0].completed = !selectedTask[0].completed;
        settaskState(taskArray)

        dispatch(UpdateTask(taskArray))
    }

    function handleDeleteTask(id) {
        console.log(id)

        let tempArray = Array.from(tasks)

        tempArray.map(task => {
            if (task.id == id) {
                let index = tempArray.indexOf(task)

                tempArray.splice(index, 1)
            }
        })
        // settaskState(tempArray)

        dispatch(DeleteTask(tempArray))
    }

    useEffect(() => {
        setTimeout(
            () => {
                settaskState(tasks)
            }, 1000
        )


    }, [tasks]);

    return (
        <Container>
            <Field newTask={handleSubmit} />
            <List tasks={taskState} action={handleCompleteTask} deleteTask={handleDeleteTask} />
        </Container>
    );
}
