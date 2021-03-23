import { PureComponent } from 'react';
import Child from './Child';

/* 
    PureComponent automatically call shouldComponentUpdate and perform shallow
    comparisons on all our props and state. The react team said that we should
    always use PureComponent if we want to prevent unnecessary render because
    calling  shouldComponentUpdate can be trick and unpredictable sometimes.

    // Other techniques of cloning an object
    const clonedState = Object.assign({}, this.state)
    const clonedState = JSON.parse(JSON.stringify(this.state))

    // Shallow comparison will always fail when dealing with objects.
*/

class MyPureComponent extends PureComponent {

    state = {
        person: {
            name: 'Imran Great',
            age: 24
        },
        hello: true
    }

    componentDidMount() {
        console.log('[Parent]: ComponentDidMount lifecycle method');
    }

    componentDidUpdate() {
        console.log('[Parent]: ComponentDidUpdate lifecycle method');
    }

    render() {

        return (
            <div>
                <h2>Hello, I am the Parent component from PureComponent</h2>
                <Child name={this.state.person.name} />
                {/* <button onClick={() => this.setState({ ...this.state })}> */}
                <button onClick={() => this.setState({...this.state, hello: true})}>
                    re-assign state to the same value
                </button>
            </div>
        );
    }
}
        
export default MyPureComponent;