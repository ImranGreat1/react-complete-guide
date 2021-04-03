import React, { Component } from 'react';
import ContextAPI from './ContextAPI';

class Child extends Component {

    /* 
        This will give us access to the context API values in this.context
        property. 
        The property has to be static and with the exact name of contextType
    */
    static contextType = ContextAPI;

    render () {
        return (
            
            // Consuming context API by wrapping the components we want to give access to the API
            // <ContextAPI.Consumer>
            //     { (context) => <h3>Child: { context.isAuthenticated ? 'Authenticated' : 'Please Log in' }</h3> }
            // </ContextAPI.Consumer>

            // A more elegant way of consuming context API in class components
            <h3>Child: { this.context.isAuthenticated ? 'Authenticated' : 'Please Log in' }</h3>
        )
    }
}

export default Child;