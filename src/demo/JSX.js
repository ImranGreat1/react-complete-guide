import React, { Component } from 'react';


class JSX extends Component {
    render() {
        // return (
        //     <div className="jsx">
        //         <h2>
        //             I am not HTML but I get compiled to HTML before rendering
        //         </h2>
        //     </div>
        // )
        // This is what happens behind the scenes
        return React.createElement('div', { className: "jsx" }, React.createElement('h2', null, 'I am not HTML but I get compiled to HTML before renderings'))
    }
}

// Some restrictions in JSX
/* 
1. We can't use class attribute but instead we use className because class is a
reserved key word in Javascript

2. The JSX we write must have one parent element, meaning one parent element that
surrounds the other children elements
*/


export default JSX;