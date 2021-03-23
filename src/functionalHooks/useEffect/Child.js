import { useEffect, useState } from 'react';


const Child = () => {

    const [styleHeading, setStyleHeading] = useState(false);

    const [count, setCount] = useState(0);
    const names = ['Imran Great', 'Imran Great Suleiman'];
    const [fullname, toggleName] = useState(false)

    /* We should take note that useEffect are after the component have finish
    rendering. So in the effect function we can make asynchronous API calls on
    the server of something of that nature */

    // Calls on every render/re-render. 
    useEffect(() => {
        console.log('[Child]: I run on every render/re-render');
    })

    /* When we want to imitate componentDIdMount, we pass an empty array the
    second argument of useEffect
    */
    useEffect(() => {
        console.log('[Child]: I render only once and that is when I\'m mounting' );

        /*
        To imitate componentWillUnmount using hooks, we'll return a function in the effect function
        we passed to useEffect. We should only do this in hooks that are going to be called when
        the component is first mounting, that is componentDidMount implemation using hooks. The function
        we returned will get called when the component is unmounting.
        */
       return () => {
           console.log('[Child]: This is called before I get destroyed from the DOM')
       }
    }, []);

    /* This will only be called when any of the array elements we passed as second argument to
    the useEffect hook changes.
    */
    useEffect(() => {
        console.log('[Child]: I re-render only when the name changes');
    }, [fullname]);

    const btnStyle = {
        padding: '1rem 2rem',
        border: 'none',
        outline: 'none',
        fontSize: '1.3rem',
        color: '#227f4a'
    }

    const headingStyle = {
        color: '#bbb',
        fontSize: '1.6rem'
    };

    return (
        <div>
            <h3 style={styleHeading ? headingStyle : null}>I am the child component</h3>
            <button onClick={() => setStyleHeading(!styleHeading)} style={btnStyle}>
                Modify Child
            </button>
            <br />
            <br />
            <h3>Count: {count}</h3>
            <button style={btnStyle} onClick={() => setCount(count + 1)}>Increment Count</button>
            <br />
            <br />
            <h3>
                { fullname ? `Fullname: ${names[0]}` : `Name: ${names[1]}` }
            </h3>
            <button style={btnStyle} onClick={() => toggleName(!fullname)}>Toggle Name</button>
        </div>
    )
};

export default Child;