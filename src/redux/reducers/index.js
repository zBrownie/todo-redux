const initState = {
    tasks: [

    ],
}



const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] }
        case "UPDATE_TASK":
            return { ...state, tasks: action.payload }

        case "DELETE_TASK":
            return { ...state, tasks: action.payload }
        default:
            return state
    }
}

export default reducer