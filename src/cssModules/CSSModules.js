import { Component } from 'react';
import classes from './style.module.css';
// import '../App.css';

class CSSModules extends Component {
    state = {
        transparent: true,
    };

    toggleColor = () => {
        this.setState({ transparent: !this.state.transparent });
    };

    render() {
        // rendering classes dynamically when using css modules
        const loginBtn = this.state.transparent ? '' : classes['btn-login'];

        const clickBtn = [classes.button];

        if (this.state.transparent) {
            clickBtn.push(classes['round-borders']);
        }

        return (
            <div>
                {/* This style will be scoped to the first button */}
                <button className={clickBtn.join(' ')}>Click me!</button>
                {/* CSS class will not work on this button because we are importing it as module */}
                <button onClick={this.toggleColor} className={loginBtn}>
                    Log in
                </button>
            </div>
        );
    }
}

export default CSSModules;
