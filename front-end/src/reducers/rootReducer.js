import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import formReducer from "./formReducer";
const rootReducer = combineReducers({
  tasks: taskReducer,
	form:formReducer
});

export default rootReducer;
