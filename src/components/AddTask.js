/* node modules */
import React, {useState} from "react";
import styled from "styled-components";

/* elements */
import {Input} from "../elements/Input";
import {Button} from "../elements/Button";

/* helpers */
import {errorMessage, successMessage} from "../helpers/toastActions";

/* redux */
import {connect} from "react-redux";
import {addTask} from "../store/actions/taskActions";



const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
`

const AddTask = (props) => {
    const [inputText, setInputText]= useState("")

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const createNewTask = () => {
        if(inputText) {
            props.addTask(inputText)
            setInputText("")
            successMessage("Завдання успішно додано !")
        } else {
            errorMessage("Завдання не можу бути пустим !")
        }
    }

        return(
            <InputContainer>
                <Input placeholder="Write your task here" value={inputText} onChange={handleChange}/>
                <Button onClick={createNewTask}>Add</Button>
            </InputContainer>
        );
}

export default connect(null, {addTask})(AddTask);