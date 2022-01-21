import React from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import styled from "styled-components";
import { v4 as createId } from 'uuid';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
`

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({taskText: event.target.value});
    }

    createNewTask = () => {
        const newTask = {
            id: createId(),
            text: this.state.taskText
        }
        this.props.addTask(newTask)
        this.setState({taskText: ""})
    }

    render() {
        return(
            <InputContainer>
                <Input placeholder="Write your task here" value={this.state.taskText} onChange={this.handleChange}/>
                <Button onClick={this.createNewTask}>Add</Button>
            </InputContainer>
        );
    }
}

export default AddTask