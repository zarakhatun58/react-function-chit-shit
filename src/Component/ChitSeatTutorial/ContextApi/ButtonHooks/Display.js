import React, { useContext } from 'react';

const Display = () => {

    const ThemeContext=React.createContext('light');

    const theme =useContext(ThemeContext);
    return (
        <div style={{background:theme ==='dark' ?'black' :'yellow',
        color:theme ==='dark' ? 'white': 'blue', 
        width:'10%', minHeight:'50px'}}>
            {'The theme  is here' +theme}
        </div>
    );
};

export default Display;