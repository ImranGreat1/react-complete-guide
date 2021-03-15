import { useState } from 'react';


const StateHook = () => {
    const [ person, setPerson ] = useState({ name: 'Imran', age: 23 });

    const [post, setPost] = useState({ title: 'This is cool', rating: 5 });

    const incrementRatingHandler = () => {
        setPost({...post, rating: post.rating + 1 })
    }

    const decrementRatingHandler = () => {
        setPost({...post, rating: post.rating - 1 })
    }

    // This function will not merge the new state with the old one
    // const updateNameHandler = () => {
    //     setPerson({ name: 'Imran Great' })
    // }

    /* This will work because we first spread the old person state,
    so the new will overwrite only the updated data
    */
    const updateNameHandler = () => {
        setPerson({...person, name: 'Imran Great' })
    }

    /* If the data are not related we can seperate them by providing one state
    call for each of them. This is usually the preffered way if the data are
    not related*/

    return (
        <div>
            <h1>
                I am a Stateful, Smart and a Container component
            </h1>
            <p>My name is {person.name}</p>
            <button onClick={updateNameHandler} >Update Name</button>
            <br/>
            <h3>Post Rating: {post.rating}</h3>
            <button onClick={incrementRatingHandler}>Increment</button>
            <button onClick={decrementRatingHandler}>Decrement</button>
        </div>
    )
}


export default StateHook;