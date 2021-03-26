import { Fragment, useRef } from 'react';

const FunctionalRefs = () => {
    const inputElementRef = useRef(null);

    const clickHandler = () => {
        // We get the target element in the current property
        inputElementRef.current.focus();
    }

    return (
        <div>
            <Fragment>
                <h2>Using refs in functioncal component using hooks</h2>
                <div>
                    <h4>Focus when button is clicked</h4>
                    <input
                        type='text'
                        ref={inputElementRef}
                    />
                    <button onClick={clickHandler}>Click to focus</button>
                </div>
            </Fragment>
        </div>
    )
};


export default FunctionalRefs;