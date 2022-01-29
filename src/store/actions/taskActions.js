import {TASK_ACTIONS as ACTIONS} from "../types/taskTypes";

export const addTask = (taskText) => ({type: ACTIONS.ADD_TASK, text: taskText});
export const deleteTaskInProgress = () =>({type: ACTIONS.DELETE_TASK_IN_PROGRESS})
export const deleteTask = (taskId) => ({type: ACTIONS.DELETE_TASK, taskId});
export const deleteTaskAsync = (taskId) => ({type: ACTIONS.DELETE_ASYNC, taskId});
export const updateStatus = (status, taskId) => ({type: ACTIONS.UPDATE_STATUS, status, taskId });
