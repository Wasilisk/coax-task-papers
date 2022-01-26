import React from "react";
import {errorMessage} from "../helpers/toastActions";

class ErrorBoundary extends React.Component {
    state = {
        isError: false,
        errorInfo: null,
    };

    componentDidCatch(errorInfo) {
        this.setState({
            isError: true,
            errorInfo: errorInfo.message,
        });
    }

    render() {
        if(this.state.isError) {
            errorMessage(this.state.errorInfo)
            this.setState({isError: false, errorInfo: null})
            return this.props.children;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary