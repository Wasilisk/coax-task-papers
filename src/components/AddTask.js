import React, {useContext, useState} from "react";
import {Input} from "../elements/Input";
import {Button} from "../elements/Button";
import styled from "styled-components";
import {errorMessage, successMessage} from "../helpers/toastActions";
import {addTask, TaskContext} from "../contexts/taskContext";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
`

const AddTask = (props) => {
    const [inputText, setInputText]= useState("")
    const { dispatch } = useContext(TaskContext);

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const createNewTask = () => {
        if(inputText) {
            dispatch(addTask(inputText))
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

export default AddTask