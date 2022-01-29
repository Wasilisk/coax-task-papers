import {TASK_ACTIONS as ACTIONS} from "../types/taskTypes";
import {v4 as createId} from "uuid";

const initialState = {
    tasks: []
};

export default function taskReducer(state = initialState, action) {
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