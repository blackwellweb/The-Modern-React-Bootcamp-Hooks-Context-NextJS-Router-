import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultVal) {
    // Make piece of state, based off of value in localStorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        } catch (error) {
            val = defaultVal;
        };
        return val;
    });

    // Use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key ,JSON.stringify(state));
    }, [state]);

    return [state, setState];
}
