import React from "react";
import {GlobalStyle} from "./globalStyles";
import Task from "./components/Task";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import {getCurrentDate} from "./helpers/getCurrentDate";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer} from "react-toastify";
import {successMessage} from "./helpers/toastActions";
import ErrorBoundary from "./components/ErrorBoundary";

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

class App extends React.Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem("tasks"))
        tasks ? this.setState({tasks: tasks}) : this.setState({tasks: []})
    }

    componentDidUpdate(prevProps, prevState) {
            if(prevState.tasks !== this.state.tasks) {
                localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
            }
    }

    addTask = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        }, () => successMessage("Завдання додано !"))
    }

    deleteTask = (taskId) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== taskId)
        }, () => successMessage("Завдання видалено !"))
    }

    setTaskStatus = (status, taskId) => {
        this.setState({
            tasks: this.state.tasks.map(task => task.id === taskId
                ? {...task, status: status}
                : task
            )
        })
    }

    render() {
        return <>
            <MainPage>
                <GlobalStyle/>
                <TaskContainer>
                    <h4>{getCurrentDate()}</h4>
                    <div className="taskBlock">
                        {
                            this.state.tasks.map(task =>
                                <Task key={task.id}
                                      task={task}
                                      deleteTask={this.deleteTask}
                                      setTaskStatus={this.setTaskStatus}
                                />)
                        }
                    </div>
                </TaskContainer>
                <ErrorBoundary>
                    <AddTask addTask={this.addTask}/>
                </ErrorBoundary>
            </MainPage>
            <ToastContainer limit={2}/>
        </>
    }
}

export default App;
