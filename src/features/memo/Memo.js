import React, { useState } from 'react';
import Child from './Child';

const Memo = () => {
    const [person, setPerson] = useState({ name: 'Imran Great', age: 24 })
    return (
        <div>
            <Child name={person.name} />
            <button onClick={() => setPerson({ name: 'Imran Great', age: 24 })}>
                Reset person to the same person
            </button>
        </div>
    )
}

export default Memo;