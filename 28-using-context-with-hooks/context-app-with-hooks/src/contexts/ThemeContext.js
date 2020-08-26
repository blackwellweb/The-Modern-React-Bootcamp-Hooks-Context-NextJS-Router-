import React, { createContext } from 'react';
import useToggleState from '../hooks/isToggleState';
import useToggle from '../hooks/isToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {

    const [isDarkMode, toggleTheme] = useToggle(false);


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}