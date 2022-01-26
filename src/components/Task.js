import React from "react";
import styled from "styled-components";
import CancelIcon from "../assets/icons/CancelIcon";
import CompleteIcon from "../assets/icons/CompleteIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";

const TaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const TaskText = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  margin: 0 15px 0 15px;
  color: #FFFFFF;
`
const TaskCheckbox = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`


class Task extends React.Component {


    ClickHandler = (status, id) => {
        if (status === "cancel") {
            this.props.setTaskStatus("", id);
        } else if (status === "complete") {
            this.props.setTaskStatus("cancel", id);
        } else {
            this.props.setTaskStatus("complete", id);
        }
    };

    textFormat = (text) => {
       return text.length < 20 ? text : `${text.slice(0,20)}...`;
    }

    render() {
        return <TaskContainer>
            <TaskCheckbox onClick={() => this.ClickHandler(this.props.task.status, this.props.task.id)}>
                {
                    {
                        'cancel': <CancelIcon/>,
                        'complete': <CompleteIcon/>
                    }[this.props.task.status]
                }
            </TaskCheckbox>
            <TaskText>{this.textFormat(this.props.task.text)}</TaskText>
            <DeleteIcon
                 onClick={() => this.props.deleteTask(this.props.task.id)}
            />
        </TaskContainer>
    }
}

export default Task;