import { Component } from 'react';
import ErrorChild from './ErrorChild';

// Error boundaries only work when our code in running in production
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        const errorStyle = { color: 'red' };

        if (this.state.hasError) {
            console.log();
            return <div style={errorStyle}>Something went wrong</div>;
        }

        return <ErrorChild />;
    }
}

export default ErrorBoundary;
