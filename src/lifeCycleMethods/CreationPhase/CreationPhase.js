import { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';


class CreationPhase extends Component {
    /* If we define constructor we'll then need to call the super function
    passing in the props as argument */
    constructor(props) {
        // Do not cause side effects such as making asynchronous call
        // In the constructor you can set some intitial state based on some props
        super(props);

        // We also set our state here, since we call the constructor
        this.state = {

        }

        console.log('[Parent]: contructor')
    }

    static getDerivedStateFromProps(props, state) {
        // Do not cause side effects such as making asynchronous call
        console.log('[Parent]: getDerivedStateFromProps')
        // What we return in this function will be our new state
        return null
    }

    componentDidMount() {
        /* We can perform asynchronouse request here such as sending request
        to a server */
        console.log('[Parent]: componentDidMount');
    }

    render() {
        console.log('[Parent]: render');
        return (
            <div>
                <h1>These are my children</h1>
                <ChildOne />
                <ChildTwo />
            </div>
        )
    }
}

export default CreationPhase;
