import { Component } from 'react';
import Person from '../demo/Person/Person';

class Arrays extends Component {
    state = {
        persons: [
            {
                id: 'djnlmwda',
                name: 'Imran',
                age: 24,
            },

            {
                id: 'uhydavpd',
                name: 'Max',
                age: 30,
            },

            {
                id: 'qwbiqelwa',
                name: 'Jane',
                age: 26,
            },
        ],
        showPersons: false,
    };

    togglePersonsHandler = () => {
        const showPersons = this.state.showPersons;
        this.setState({ showPersons: !showPersons });
    };

    inputChangedHandler = (event, id) => {
        const persons = [...this.state.persons];
        const personIndex = persons.findIndex((p) => p.id === id);

        let person = persons[personIndex];
        // We can also use object.assign({}, objectToBeCoppied) to copy object
        person = { ...person, name: event.target.value };

        persons[personIndex] = person;

        this.setState({ persons });
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = this.state.persons.map((person) => {
                return (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        changed={(event) =>
                            this.inputChangedHandler(event, person.id)
                        }
                    />
                );
            });
        }

        return (
            <div>
                {persons}
                <button onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
            </div>
        );
    }
}

export default Arrays;
