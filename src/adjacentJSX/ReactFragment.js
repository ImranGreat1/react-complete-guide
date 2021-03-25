import { Fragment } from 'react';

const AuxillaryChild = () => {
    /* 
        Fragment is just a higher order component provided by react that works
        exactly the way our higher order Auxillary component works.
    */
    return (
        <Fragment>
            <h3>Using React's Fragment higher order component</h3>
            <p>This is so cool and powerful</p>
        </Fragment>
    )
}


export default AuxillaryChild;