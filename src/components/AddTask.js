import React from "react";
import {Input} from "../elements/Input";
import {Button} from "../elements/Button";
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
            isError: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({taskText: event.target.value});
    }

    createNewTask = () => {
        if(this.state.taskText) {
            const newTask = {
                id: createId(),
                text: this.state.taskText,
                status: ""
            }
            this.props.addTask(newTask)
            this.setState({taskText: ""})
        } else {
            this.setState({isError: true})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isError) {
            this.setState({isError: false})
        }
    }

    render() {
        if(this.state.isError) {
            throw new Error("Завдання не можу бути пустим !")
        }
        return(
            <InputContainer>
                <Input placeholder="Write your task here" value={this.state.taskText} onChange={this.handleChange}/>
                <Button onClick={this.createNewTask}>Add</Button>
            </InputContainer>
        );
    }
}

export default AddTask