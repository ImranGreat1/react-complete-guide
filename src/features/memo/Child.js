import React, { useEffect } from 'react';
/* 
    Using React.memo higher order component only prevent re-renders
    if the props that changes will still render the same UI. But in
    a case where the functional component manage state, if the state
    changes even if it changes to the same value, the component will
    still re-render.

    With React.memo the comparison always not be the same when it is
    comparing objects, it only works normally with primitives types of
    data.
*/
const Child = (props) => {

    useEffect(() => {
        console.log('[Child]: I run on every render/re-render')
    });

    return (
        <div>
            <h3>Hello, I am the Child component</h3>
            <h4>name {props.name}</h4>
        </div>
    )
}

export default React.memo(Child);