import {TASK_ACTIONS as ACTIONS} from "../types/taskTypes";

export const setTask = (tasks) => ({type: ACTIONS.SET_TASK, tasks});
export const addTask = (taskText) => ({type: ACTIONS.ADD_TASK, text: taskText});
export const deleteTask = (taskId) => ({type: ACTIONS.DELETE_TASK, taskId});
export const updateStatus = (status, taskId) => ({type: ACTIONS.UPDATE_STATUS, status, taskId });
