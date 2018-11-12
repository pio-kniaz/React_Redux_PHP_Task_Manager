import { GET_TASKS, ADD_TASK, DELETE_TASK } from "./types";
import axios from "axios";
export const getTasks = () => async dispatch => {
  const res = await axios.get(
    `http://localhost/Task_manager/Back-End/index.php/Tasks/tasks_api`
  );
  dispatch({
    type: GET_TASKS,
    payload: res.data.tasks
  });
};
export const addTask = newTask => async dispatch => {
  const data = await new FormData(newTask);
  await fetch("http://localhost/Task_manager/Back-End/index.php/Tasks/add_task", {
    method: "POST",
    body: data
  });
	console.log(data,'data');
  dispatch({
    type: ADD_TASK,
    payload: newTask
  });
};

export const deleteTask = id => async dispatch => {
  await axios.delete(
    `http://localhost/Task_manager/Back-End/index.php/Tasks/delete_task/${id}`
  );
  dispatch({
    type: DELETE_TASK,
    payload: id
  });
};
