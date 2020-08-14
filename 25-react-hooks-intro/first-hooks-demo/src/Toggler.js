import React from 'react';
import useToggle from './hooks/useToggle'

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
    const [isBanana, toggleIsBanana] = useToggle(true);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "I'm happy" : "I'm sad"}</h1>
            <h1 onClick={toggleIsBanana}>{isBanana ? "I'm a Banana" : "I'm not a Banana"}</h1>
        </div>
    )
}


export default Toggler;
