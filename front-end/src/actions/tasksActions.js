import { GET_TASKS } from "./types";
import axios from "axios";
export const getTasks = () => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  dispatch({
    type: GET_TASKS,
    payload: res.data
  });
};
