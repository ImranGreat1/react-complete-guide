import './App.css';
import React, { Component } from 'react';
// import { StyleRoot } from 'radium';
// import DemoApp from './demo/DemoApp';
// import StateHook from './demo/StateHook';
// import Arrays from './features/Arrays';
// import ExerciseTwo from './exercise/ExerciseTwo/ExerciseTwo';
// import InlineStylesWithRadium from './InlineStyles/InlineStylesWithRadium';
import StyledComponent from './InlineStyles/StyledComponent';
import CSSModules from './cssModules/CSSModules';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <DemoApp /> */}
                {/* <StateHook /> */}
                {/* <Arrays /> */}
                {/* <ExerciseTwo /> */}
                {/* <InlineStylesWithRadium /> */}
                <StyledComponent />
                <CSSModules />
            </div>
        );
    }
}

export default App;
