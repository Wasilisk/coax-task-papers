import React, { useReducer, createContext, useMemo } from "react";
import {v4 as createId} from "uuid";

export const TaskContext = createContext();

export const ACTIONS = {
    SET_TASK: "SET-TASK",
    ADD_TASK: "ADD-TASK",
    DELETE_TASK: "DELETE-TASK",
    UPDATE_STATUS: "UPDATE-STATUS"
};
const initialState = {
    tasks: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_TASK:
            return {
                tasks: action.tasks,
            }
        case ACTIONS.ADD_TASK:
            const newTask = {
                id: createId(),
                text: action.text,
                status: ""
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case ACTIONS.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            };
        case ACTIONS.UPDATE_STATUS:
            return {
                tasks: state.tasks.map(task => task.id === action.taskId
                    ? {...task, status: action.status}
                    : task
                )
            }
        default:
            return state;
    }
};

export const setTask = (tasks) => ({type: ACTIONS.SET_TASK, tasks});
export const addTask = (taskText) => ({type: ACTIONS.ADD_TASK, text: taskText});
export const deleteTask = (taskId) => ({type: ACTIONS.DELETE_TASK, taskId});
export const updateStatus = (status, taskId) => ({type: ACTIONS.UPDATE_STATUS, status, taskId });

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);
    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};
