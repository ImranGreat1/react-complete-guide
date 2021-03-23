import { PureComponent } from 'react';

class Child extends PureComponent {

    componentDidMount() {
        console.log('[Child]: ComponentDidMount lifecycle method');
    }

    componentDidUpdate() {
        console.log('[Child]: ComponentDidUpdate lifecycle method');
    }

    render() {
        return (
            <div>
                <h3>Hello, I am the Child component from PureComponent</h3>
                <p>name: {this.props.name}</p>
            </div>
        );
    }
}
        
export default Child;