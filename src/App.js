/* node modules */
import React from "react";
import styled from "styled-components";

/* components */
import {ToastContainer} from "react-toastify";
import TaskContainer from "./containers/TaskContainer";
import AddTask from "./components/AddTask";

/* styles */
import 'react-toastify/dist/ReactToastify.min.css';
import {GlobalStyle} from "./globalStyles";


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

const App = () => {

    return (
        <>
            <MainPage>
                <GlobalStyle/>
                <TaskContainer/>
                <AddTask/>
            </MainPage>
            <ToastContainer limit={2}/>
        </>
    )
}

export default App;
