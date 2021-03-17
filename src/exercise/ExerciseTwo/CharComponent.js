const CharComponent = (props) => {
    const style = {
        // display: 'inline-block'
        border: '1px solid #eee',
        padding: '7px',
        marginRight: '3px',
        fontSize: '1.4rem',
    };

    return (
        <span onClick={props.removeLetter} style={style}>
            {props.letter}
        </span>
    );
};

export default CharComponent;
