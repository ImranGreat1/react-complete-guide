import withClass from './withClass';
import Auxillary from '../adjacentJSX/Auxillary';

const ChildTwo = (props) => {
    return (
        <Auxillary>
            <h3>Hello Everyone [ChildTwo], I have a higher order component wrapped around me</h3>
            <p>This higher order component wrapped a div around me with some classes
                added to it</p>
            <p>{props.name}</p>
        </Auxillary>
    );
}

export default withClass(ChildTwo);