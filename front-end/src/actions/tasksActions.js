import { GET_TASKS } from "./types";
import axios from "axios";
export const getTasks = () => async dispatch => {
  const res = await axios.get(`http://localhost/Task_manager/Back-End/index.php/Tasks/tasks_api`);
  dispatch({
    type: GET_TASKS,
    payload: res.data.tasks
  });
};
