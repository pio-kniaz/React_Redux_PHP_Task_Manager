import { GET_TASKS, ADD_TASK,DELETE_TASK } from "../actions/types";
const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case ADD_TASK:
		console.log(action.payload,'action.payload');
      return {
        ...state,
        tasks: [...state.tasks]
      };
			case DELETE_TASK:
				return{
					...state,
					tasks:state.tasks.filter((elem)=>{
						return elem.id!==action.payload
					})
				}
				break;
    default:
      return state;
  }
};

export default taskReducer;
