import { Component } from 'react';

class Child extends Component {
    
    componentWillUnmount() {
        /* This will be called before the component get removed from the DOM
        We can use it for to the some necessary clean ups such as unsubscribing
        from a subscription or something of that nature, just stuffs you want to
        perform before the component get destroyed.
        */
       console.log('[Child]: Cleaning up before unmounting in componentWillUnmount');
    }

    render() {
        return(
            <div>
                <h3>Hello, I am the child component</h3>
            </div>
        )
    }
}

export default Child;