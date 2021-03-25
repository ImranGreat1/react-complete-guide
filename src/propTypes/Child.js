import PropTypes from 'prop-types';
// The convention is to use PropTypes with camel casing when importing prop-types

const Child = (props) => {
    return (
        <div>
            {props.name} is {props.age} years old.
        </div>
    )
}

/* 
    propTypes property on our component is a reserved word used by react to
    check the props we specify we'll be expecting and the types of those props.
    When we pass a prop value which has a type different from the one we specify,
    react will log some errors telling us we are sending a different value type
    on that prop. This will work only during development.
*/

Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}


export default Child;
