import React, { useEffect, useState } from 'react';

const WithoutArray = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [effectLogs, setEffectLogs] = useState([]);

   
    // Empty array dependency
    useEffect(() => {
        setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect'])
    }, [])
    // useEffect(() => {
    //     console.log("This will be logged after every render");
    //     })
    return (
        <div>
            <div>
            <p>{randomNumber}</p>
            <button type="submit" onClick={() =>{setRandomNumber(Math.random())}}>random Number</button>
           
            </div>
        </div>
    );
};

export default WithoutArray;