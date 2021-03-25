import WithClassComponent from './WithClassComponent';

/* 
    Higher order components are used to add something to their wrapped, it
    can some JSX, styles, features or even error handling. 

*/

const ChildOne = () => {
    return (
        <WithClassComponent>
            <h3>Hello Everyone [ChildOne], I have a higher order component wrapped around me</h3>
            <p>This higher order component wrapped a div around me with some classes
                added to it</p>
        </WithClassComponent>
    );
}

export default ChildOne;