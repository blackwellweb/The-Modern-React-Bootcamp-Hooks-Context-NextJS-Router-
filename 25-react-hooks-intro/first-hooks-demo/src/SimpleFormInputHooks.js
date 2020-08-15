import React from 'react';
import useInputState from './hooks/useInputState';

function SimpleFormInputHooks() {
    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");
    return (
        <div>
            <h1>Email is: {email} and Password is: {password}</h1>
            <input type='text' value={email} onChange={updateEmail}/>
            <input type='text' value={password} onChange={updatePassword}/>
            <button onClick={resetEmail}>Reset Email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}


export default SimpleFormInputHooks;