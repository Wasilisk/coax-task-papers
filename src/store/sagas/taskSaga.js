import {put, takeEvery, call} from 'redux-saga/effects'
import {TASK_ACTIONS} from "../types/taskTypes";
import {successMessage} from "../../helpers/toastActions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* deleteAsync({taskId}) {
    yield put({type: TASK_ACTIONS.DELETE_TASK_IN_PROGRESS, taskId})
    yield delay(Math.random() * 5000)
    yield put({type: TASK_ACTIONS.DELETE_TASK, taskId})
    yield call(successMessage, "Завдання успішно видалено !")
}

export function* watchIncrementAsync() {
    yield takeEvery(TASK_ACTIONS.DELETE_ASYNC, deleteAsync)
}