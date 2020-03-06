export function InsertTask(newTask) {
    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}

export function UpdateTask(newTask){
    return {
        type: 'UPDATE_TASK',
        payload: newTask
    }
}

export function DeleteTask(newTask){
    return {
        type: 'DELETE_TASK',
        payload: newTask
    }
}