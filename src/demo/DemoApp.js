import React, { Component } from 'react';
// import JSX from './JSX';
import Person from './Person/Person';

class DemoApp extends Component {
    // State in class components
    state = {
        persons: [
            {
                name: 'Imran',
                age: 24
            },
            {
                name: 'Max',
                age: 30
            },
            {
                name: 'Jane',
                age: 26
            }
        ]
    }
    // We'll need to bind the 'this' keyword when using normal functions
    updateAdminHandler = function(name) {
        // we update the state by calling this.setState method with the updated data
        const newPersons = [...this.state.persons]
        name = name ? name : 'Imran Great';
        newPersons[0] = { name, age: 24, admin: true }
        this.setState({persons: newPersons})
    };

    // We don't have to bind the 'this' keyword when using arrow functions
    updateMax = () => {
        // we update the state by calling this.setState method with the updated data
        const newPersons = [...this.state.persons]
        newPersons[1] = { name: 'Max The Creator', age: 31, admin: true }
        this.setState({persons: newPersons})
    };

    inputChangeHandler = (event) => {
        const newPersons = [...this.state.persons]
        newPersons[2] = { name: event.target.value, age: 31, admin: true }
        this.setState({persons: newPersons})
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    // passsing arguments when using binding the 'this' keyword
                    click={this.updateAdminHandler.bind(this, 'Imran Great Suleiman')}
                    // changed={this.inputChangeHandler}
                >
                    I love to code
                </Person>
                <Person
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.updateMax}
                    // changed={this.inputChangeHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.inputChangeHandler}
                />
                {/* We can also use the arrow function hack but it is said to be not efficient */}
                <button onClick={() => this.updateAdminHandler()}>Click to update Admin</button>
            </div>
        )
    }
}
export default DemoApp;