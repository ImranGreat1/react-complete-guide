import React, { Component } from 'react';
import Child from './Child';
import AuthButton from './AuthButton';

class Parent extends Component {
    render () {
        return (
            <React.Fragment>
                <h3>Hello from Parent</h3>
                <Child />
                <AuthButton />
            </React.Fragment>
        )
    }
}

export default Parent;