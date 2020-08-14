import React, { useState } from 'react'

function CounterHooks() {
    /**
     *  This will give us
     * 1. the pice of state
     * 2. function to update the piece of state
     */
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>The count is: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}


export default CounterHooks;