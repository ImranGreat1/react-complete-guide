import { Component, Fragment, createRef } from 'react';


class ClassRefs extends Component {

    constructor(props) {
        super(props);

        this.inputElementReference = createRef();
    }

    componentDidMount() {
        // The current element here will be in a current property
        this.inputElementReference.current.focus();
    }



    clickHandler = () => {
        // We don't use current here, the element is exposed directly
        this.inputElementRef.focus();
    }

    render() {
        return (
            <Fragment>
                 <h2>Using refs in class based component</h2>
                <div>
                    <h4>Focus on render</h4>
                    <input 
                        type='text'
                        ref={this.inputElementReference}
                    />
                </div>

                <div>
                    <h4>Focus when button is clicked</h4>
                    <input
                        type='text'
                        ref={(inputElement) => { this.inputElementRef = inputElement }}
                    />
                    <button onClick={this.clickHandler}>Click to focus</button>
                </div>
            </Fragment>
        );
    }
}


export default ClassRefs;


