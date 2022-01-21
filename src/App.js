import React from "react";
import {GlobalStyle} from "./globalStyles";
import Task from "./components/Task";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import {getCurrentDate} from "./utils/getCurrentDate";

const MainPage = styled.div`
  position: relative;
  width: auto;
  max-width: 300px;
  height: 100%;
  max-height: 820px;
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
    tasks: [
      {
        id: 1,
        text: "Learn React"
      },
      {
        id:2,
        text: "Write code"
      },
      {
        id: 3,
        text: "Sleep"
      },
    ]
  }

  addTask = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    })
  }

  render() {
    return <MainPage>
      <GlobalStyle/>
      <TaskContainer>
        <h4>{getCurrentDate()}</h4>
        <div className="taskBlock">
          {this.state.tasks.map(task => <Task key={task.id} task={task} deleteTask={this.deleteTask}/>)}
        </div>
      </TaskContainer>
      <AddTask addTask={this.addTask}/>
    </MainPage>
  }
}

export default App;
