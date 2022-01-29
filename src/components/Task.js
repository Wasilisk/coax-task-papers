/* node modules */
import React from "react";
import styled from "styled-components";

/* icons */
import CancelIcon from "../assets/icons/CancelIcon";
import CompleteIcon from "../assets/icons/CompleteIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";

/* redux */
import {connect} from "react-redux";
import {deleteTask, updateStatus} from "../store/actions/taskActions";

/* helpers */
import {successMessage} from "../helpers/toastActions";


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


const Task = (props) => {
    const {id, text, status} = props.task;

    const clickHandler = (status, id) => {
        if (status === "cancel") {
            props.updateStatus("", id);
        } else if (status === "complete") {
            props.updateStatus("cancel", id);
        } else {
            props.updateStatus("complete", id);
        }
    };

    const textFormat = (text) => {
        return text.length < 20 ? text : `${text.slice(0, 20)}...`;
    }

    return (<TaskContainer>
        <TaskCheckbox onClick={() => clickHandler(status, id)}>
            {
                {
                    'cancel': <CancelIcon/>,
                    'complete': <CompleteIcon/>
                }[status]
            }
        </TaskCheckbox>
        <TaskText>{textFormat(text)}</TaskText>
        <DeleteIcon
            onClick={() => {
                props.deleteTask(id)
                successMessage("Завдання успішно видалено !")
            }}
        />
    </TaskContainer>)
}

export default connect(null, {updateStatus, deleteTask})(Task);