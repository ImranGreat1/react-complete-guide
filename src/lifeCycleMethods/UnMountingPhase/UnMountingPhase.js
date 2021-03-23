import { Component } from 'react';
import Child from './Child';


class UnMountingPhase extends Component {
    state = {
        displayChild: true,
    }

    render() {
        return (
            <div>
                <h2>I am the Parent Component</h2>
                <button onClick={() => this.setState({ displayChild: !this.state.displayChild })}>
                    {this.state.displayChild ? 'Hide' : 'Display'} Child
                </button>
                {this.state.displayChild ? <Child /> : null}
            </div>
        )
    }
}


export default UnMountingPhase;