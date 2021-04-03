import React, { Component } from 'react';
import Parent from'./Parent';
import ContextAPI from './ContextAPI';

class GrandParent extends Component {

    state = {
        isAuthenticated: false,
    }

    loginLogoutHandler = () => {
        this.setState(state => ({ isAuthenticated: !state.isAuthenticated }));
    }

    render () {
        return (
            <React.Fragment>
                <h2>Hello from GrandParent</h2>
                {/* 
                    We wrap the components we want to have access to the context API values
                    to with the context API provider component. The value prop is required for
                    contextAPI provider.

                    Note: Change in just the context API values doesn't trigger re-render, only change
                    in props and state triggers re-render.
                */}
                <ContextAPI.Provider value={{
                    isAuthenticated: this.state.isAuthenticated,
                    loginLogout: this.loginLogoutHandler}}
                >
                    <Parent />
                </ContextAPI.Provider>
            </React.Fragment>
        )
    }
}

export default GrandParent;