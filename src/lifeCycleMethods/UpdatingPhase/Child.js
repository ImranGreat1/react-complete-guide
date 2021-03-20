import { Component } from 'react';

/*
    // The order in which component updating phase lifecycle methods get called
    1. static getDerivedStateFromProps
    2. shouldComponentUpdate
    3. render
    4. getSnapshotBeforeUpdate
    5. componentDidUpdate
*/



class Child extends Component {

    state = {
        great: true
    }

    /* 
        Make sure that you have a state defined if not it will throw some errors.
        This runs on both rendering and updating phase
    */
    static getDerivedStateFromProps (props, state) {
        console.log('[Child]: getDerivedStateFromProps');
        // The return value will be the new updated state
        return { great: 'Hello World' };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Child]: shouldComponentUpdate');

        /* Whatever you return here will determine if the component should
            re-render or not. It is usually to compare the nextProps and  
            nextState with the currentProps and currentState to see if there
            is need to re-render the component. If you return true, the component
            will re-render and if false it will not re-render
        */
    //    console.log(this.state.great)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        /* To get the current state of our app before updating such as the scroll
        positon of the user so that we can returned the user to the same scroll position
        after updating the dom in the componentDidupdate lifecycle method*/
        console.log('[Child]: getSnapshotBeforeUpdate');
        return { message: 'Snapshot send from getSnapshotBeforeUpdate and displayed in componentDidUpdate' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /* We can make asynchronous call here. snapshot is what is returned from
        getSnapshotBeforeUpdate lifecycle method
        */
        console.log(snapshot.message);
        console.log('[Child]: componentDidUpdate');
    }

    render() {

        console.log('[Child]: render')

        const buttonTxt = this.props.displayName ? 'hide name' : 'display name'
        return (
            <div>
                <h2>
                    I am the Child
                </h2>
                <button onClick={this.props.toggleName}>{buttonTxt}</button>
            </div>
        )
    }
}


export default Child;