/* 
    This is not a component but a normal function that returns a component with
    some features.

    If the return component is being passed props from another component that uses
    it, we can simply transfer those props using spread operator on the component
    becuase the props on the returned components arguments are actually the props
    that were passed to it from another component.
*/

const withClass = (WrappedComponent) => {
    return (props) => {
        return (
            <div className={'Added classes using higher order component'}>
                <WrappedComponent {...props} />
                <p>This is added by HOC</p>
            </div>
        )
    }
}


export default withClass;