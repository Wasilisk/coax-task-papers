/* components */
import Task from "../components/Task";
import {useContext} from "react";
import styled from "styled-components";

/* helpers */
import {getCurrentDate} from "../helpers/getCurrentDate";

/* context */
import {TaskContext} from "../contexts/taskContext";

const TaskGroup = styled.div`
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

const TaskContainer = () => {
    const {state} = useContext(TaskContext);

    return (
        <TaskGroup>
            <h4>{getCurrentDate()}</h4>
            <div className="taskBlock">
                {
                    state.tasks.map(task =>
                        <Task key={task.id} task={task}/>)
                }
            </div>
        </TaskGroup>
    );
};

export default TaskContainer;