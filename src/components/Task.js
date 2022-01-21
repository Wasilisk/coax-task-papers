import React from "react";
import styled from "styled-components";
import Delete from "../icons/Delete.svg"
import Cancel from "../icons/Cancel.svg"
import Complete from "../icons/Complete.svg"

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
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        };
    }

    ClickHandler = () => {
        if (this.state.status === "cancel") {
            this.setState({status: ""});
        } else if (this.state.status === "complete") {
            this.setState({status: "cancel"});
        } else {
            this.setState({status: "complete"})
        }
    };

    textFormat = (text) => {
       return text.length <= 20 ? text : `${text.slice(0,20)}...`;
    }

    render() {
        return <TaskContainer>
            <TaskCheckbox onClick={this.ClickHandler}>
                {
                    {
                        'cancel': <img src={Cancel} alt="Cancel icon"/>,
                        'complete': <img src={Complete} alt="Complete icon"/>
                    }[this.state.status]
                }
            </TaskCheckbox>
            <TaskText>{this.textFormat(this.props.task.text)}</TaskText>
            <img style={{cursor: "pointer"}}
                 onClick={() => this.props.deleteTask(this.props.task.id)}
                 src={Delete} alt="Delete icon"
            />
        </TaskContainer>
    }
}

export default Task;