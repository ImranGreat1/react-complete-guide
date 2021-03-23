import { useEffect, useState} from 'react';
import Child from './Child';

const UseEffect = () => {

    const [state, setState] = useState({name: 'Imran Great',displayChild: true});

    /* useeffect hook takes a function as argument which we'll refer to as the 'hook'
    because it what inside the function that get called, the useEffect hook just use it
    as the name implies. UseEffect hook that do the work of componentDidMount,
    componentDidUpdate and componentWillUnmount of class based components lifecycle hooks*/
    // useEffect hook that has no second argument runs on every re-render
    useEffect(() => {
        // This will run on every render or re-render (both mounting and updating)
        console.log('[UseEffect] Parent: I run on every render or re-render');
    })

    const displayChildHandler = () => {
        setState({ ...state, displayChild: !state.displayChild });
    }

    return (
        <div>
            <h2>I am the Parent component: Use Effect Example</h2>
            <button onClick={displayChildHandler}>
                { state.displayChild ? 'Hide' : 'Display' } Child
            </button>
            { state.displayChild ? <Child /> : null }
        </div>
    )
};


export default UseEffect;