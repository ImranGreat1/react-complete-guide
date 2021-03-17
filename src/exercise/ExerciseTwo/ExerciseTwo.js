import { Component } from 'react';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';

class ExerciseTwo extends Component {
    state = {
        text: '',
        textLength: 0,
        textArray: [],
    };

    inputChangedHandler = (event) => {
        this.setState({
            text: event.target.value,
            textLength: event.target.value.length,
            textArray: event.target.value.split(''),
        });
    };

    removeLetter = (index) => {
        const textArray = [...this.state.textArray];
        const newTextArray = textArray.filter((letter, i) => index !== i);

        this.setState({
            text: newTextArray.join(''),
            textLength: newTextArray.join('').length,
            textArray: newTextArray,
        });
    };

    render() {
        const textList = this.state.text.split('').map((letter, index) => {
            return (
                <CharComponent
                    removeLetter={this.removeLetter.bind(this, index)}
                    key={index}
                    letter={letter}
                />
            );
        });

        return (
            <div>
                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.text}
                />
                <p>{this.state.textLength}</p>
                <p>{textList}</p>
                <ValidationComponent textLength={this.state.textLength} />
            </div>
        );
    }
}

export default ExerciseTwo;
