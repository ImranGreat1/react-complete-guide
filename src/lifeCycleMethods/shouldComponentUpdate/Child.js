import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Child extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Child]: shouldComponentUpdate lifecycle method')

        // This works only for primitive types values comparison
        // return nextProps.name.surname !== this.props.name.surname;

        // Using the shallowCompare react add-ons
        /* 
            NOTE: If we want to optimise our app to prevent unnecessary render
            based on the new props or state we received, react recommed us to
            use PureComponent instead. After testing a couple of times, I realised
            even the shallowCompare add-ons can sometimes yield a strange behavior,
            so I recommed using the PureComponent sub-class.
        */
        console.log(shallowCompare(this, nextProps, nextState), 'Child');
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { name, surname  } = this.props.name;

        console.log('[Child]: Render lifecycle method')
        return (
            <div>
                <h3>Hello, I am the child component</h3>
                <p>{name} {surname}</p>
            </div>
        )
    }
}

export default Child;