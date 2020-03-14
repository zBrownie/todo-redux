const initState = {
  tasks: [],
  userinfo: {},
  token: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: action.payload };

    case "GET_USER":
      return { ...state, userinfo: action.payload };
    case "GET_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default reducer;
