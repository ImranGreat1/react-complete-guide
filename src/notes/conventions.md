### Some Conventions to follow in react

* When update your state based on the previous state, we should always pass a function to set state intead of passing an object and updating it in the object.
```javascript
// Don't use
this.setState({ count: count + 1 })

/* Correct way, this way is guaranteed by react that you
are using the right value to update your state
*/
this.setState((prevState, props) => {
    // The process we have access to here is the current props

    // return updated state value
    return { count: prevState.count + 1 }

})
```