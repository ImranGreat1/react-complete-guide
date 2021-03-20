import { Component } from 'react';
import Child from './Child';

class UpdatingPhase extends Component {
    state = {
        name: 'Imran Great',
        displayName: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[Parent]: getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Parent]: shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Parent]: getSnapshotBeforeUpdate');
        return { message: 'Scroll position' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Parent]: componentDidUpdate');
    }

    displayNameHandler = () => {
        this.setState({ displayName: !this.state.displayName });
    };

    render() {

        console.log('[Parent]: render')

        const { name, displayName } = this.state;
        let nameJSX = displayName ? <p>{name}</p> : null;
        return (
            <div>
                <h1>I am the Father</h1>
                <Child
                    displayName={displayName}
                    toggleName={this.displayNameHandler}
                />
                { nameJSX }
            </div>
        );
    }
}

export default UpdatingPhase;