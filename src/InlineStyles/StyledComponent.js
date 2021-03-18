import styled from 'styled-components';
import { Component } from 'react';

const Card = styled.div`
    padding: 20px;
    background-color: ${(props) => (props.isGreen ? 'yellowgreen' : 'plum')};
    line-height: 1.4;
    font-family: sans-serif;
    border: 1px solid #f2f2f2;
    width: 300px;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
    background-color: #f7f7f7;
    color: #777;
    padding: 0.7rem 1.8rem;
    border: 1px solid #ddd;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    transition: all 0.2s;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #e5e5e5;
    }

    @media only screen and (max-width: 500px) {
        background-color: coral;
        &:hover {
            background-color: orangered;
        }
    }
`;

class StyledComponent extends Component {
    state = {
        isGreen: false,
    };

    toggleColor = () => {
        this.setState({ isGreen: !this.state.isGreen });
    };

    render() {
        return (
            <div>
                <Card isGreen={this.state.isGreen}>
                    <p>
                        This is a simple card build using Styled-component
                        package and from what I can see, this react third-party
                        package is really great.
                    </p>
                    <Button onClick={this.toggleColor}>View</Button>
                </Card>
            </div>
        );
    }
}

export default StyledComponent;
