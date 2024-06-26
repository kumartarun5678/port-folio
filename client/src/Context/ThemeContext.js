import {useState, useContext, createContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [Theme, setTheme] = useState("light");

    return(
        <ThemeContext.Provider value={[Theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme};