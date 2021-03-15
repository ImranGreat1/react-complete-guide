import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click} >My name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            {/* Two way binding */}
            <input type="text" onChange={props.changed}  value={props.name} /*defaultValue={props.name}*/ />
        </div>
    )
};

/* 
props is the argument we get when our component is passed an attribute at
the component it is being used. We can call props anything but it is a
the convention to always use props

we input dynamic content using single curly braces like: {props.name}
*/

/* 
 We can pass not only just plain text but event JSX. We pass complex JSX
 as the children props of a component 
*/

/* When using a functional component, we should always use lowercase at
the beginning of the component name*/

/*
    Two ways binding is when we share data both from the parent and child.
    Example of this is when we have an input in a child component that
    updates the parent component when the value of the input changes usually
    by listening to an onChange event. Then in the parent component we are
    also passing the value of the input when we first view the child component.

    When we provide a value to an input element, we'll have to listen to an
    unchange event if not the input will be a read-only field. Another workaround
    if we don't want to provide an onChange handler is to use defaultValue attribute
    instead.
*/

export default person;