const ValidationComponent = (props) => {
    let message = '';

    if (props.textLength < 5) {
        message = 'Text too short';
    }

    if (props.textLength >= 20) {
        message = 'Text too long';
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default ValidationComponent;
