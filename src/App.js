import React, {useContext, useEffect} from "react";
import {GlobalStyle} from "./globalStyles";
import Task from "./components/Task";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import {getCurrentDate} from "./helpers/getCurrentDate";
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";
import { setTask, TaskContext} from "./contexts/taskContext";

const MainPage = styled.div`
  position: relative;
  width: auto;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TaskContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  & > h4 {
    font-family: IBM Plex Mono, monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .taskBlock {
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`

const App = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks && dispatch(setTask(tasks))
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }, [state.tasks])

    return (
        <>
            <MainPage>
                <GlobalStyle/>
                <TaskContainer>
                    <h4>{getCurrentDate()}</h4>
                    <div className="taskBlock">
                        {
                            state.tasks.map(task =>
                                <Task key={task.id} task={task}/>)
                        }
                    </div>
                </TaskContainer>
                <AddTask/>
            </MainPage>
            <ToastContainer limit={2}/>
        </>
    )
}

export default App;
