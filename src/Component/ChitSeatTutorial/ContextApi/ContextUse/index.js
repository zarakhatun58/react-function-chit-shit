import React, { useContext } from 'react';


const ContextUse = () => {
    const ThemeContext = React.createContext('dark');
    function Button() {
        return <ThemeContext.Consumer>
            {theme => <button className={theme}> Amazing button </button>}
        </ThemeContext.Consumer>
    }
    const theme = useContext(ThemeContext)

    return (
        <div>
            <button className={theme}>Amazing button</button>
        </div>
    );
};

export default ContextUse;