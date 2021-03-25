const WithClassComponent = props => {
    return(
        <div className={'Added class to wrapped component'}>
            {props.children}
            <p>This is added by HOC</p>
        </div>
    )
}

export default WithClassComponent;