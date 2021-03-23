import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Child from './Child';


class ShouldComponentUpdate extends Component {

    state = {
        name: 'Imran Great',
        surname: 'Suleiman'
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Parent]: shouldComponentUpdate lifecycle method');

        // if (nextState !== this.state) {
        //     return true;
        // }

        // The below code will return false
        /* Applying this exact same approach in child component yield true and I don't
        understand how that happened */
        return shallowCompare(this, nextProps, nextState);
    }

    reAssignStateHandler = () => {
        this.setState({ name: 'Imran Great',
        surname: 'Suleiman' });
    }

    render() {
        console.log('[Parent]: Render lifecycle method');
        return (
            <div>
                <h2>I am the Parent component from shouldComponentUpdate</h2>
                <Child name={this.state} />

                <button onClick={this.reAssignStateHandler}>set state to the same value</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate;