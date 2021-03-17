import { Component } from 'react';
import Radium from 'radium';

class InlineStylesWithRadium extends Component {
    state = {
        name: 'Imran Great',
        visible: false,
    };

    toggleNameHandler = () => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        const btnStyle = {
            backgroundColor: '#f2f2f2',
            padding: '1rem 2.5rem',
            margin: '2rem 0',
            color: '#777',
            boxShadow: '0 3px 6px rgba(0, 0, 0, .2)',
            border: 'none',
            borderRadius: '100px',
            // outline: 'none',
            fontSize: '1.3rem',
            transition: 'all .2s',
            cursor: 'pointer',

            /* radium allows us to use features like media queries and pseudo
            selectors and elements */
            ':hover': {
                backgroundColor: '#eee',
                transform: 'translateY(-2px)',
            },

            ':focus': {
                boxShadow: '0 2px 4px rgba(0, 0, 0, .2)',
                outline: 'none',
                transform: 'translateY(0)',
            },

            /* To use media queries, keyframes and others we must wrap our root
                component with the StyleRoot component that radium provide us with */
            '@media only screen and (max-width: 500px)': {
                backgroundColor: 'orangedred',
                color: '#fff',
            },
        };

        const nameStyle = {
            fontSize: '2rem',
            fontWeight: '600',
        };

        let name = this.state.visible ? this.state.name : '';

        return (
            <div>
                <button style={btnStyle} onClick={this.toggleNameHandler}>
                    Toggle Name
                </button>
                <p style={nameStyle}>{name}</p>
            </div>
        );
    }
}

export default Radium(InlineStylesWithRadium);
