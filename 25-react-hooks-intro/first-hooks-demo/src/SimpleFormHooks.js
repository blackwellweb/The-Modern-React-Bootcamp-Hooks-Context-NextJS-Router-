import React, { useState } from 'react';

function SimpleFormHooks() {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h1>The value is... {email}</h1>
            <input type="text" value={email} onChange={handleChange} />
            {/* This just shows how you can use an inline arrow function instead of handleChange*/}
            <button onClick={() => setEmail("")}>Reset</button>
        </div>
    )
}


export default  SimpleFormHooks;