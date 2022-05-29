import React, { useEffect, useState } from 'react';

const SkippingEffect = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [effectLogs, setEffectLogs] = useState([]);

    useEffect(() => {
        setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect'])
    }, [randomNumber])

    
    return (
        <div>
            
            <div>
            <p>{randomNumber}</p>
            <button type="submit" onClick={() =>{setRandomNumber(Math.random())}}>random Number</button>
                {effectLogs.map( (effect, index) =>(
                    <div key={index}>{'🍔'.repeat(index) + effect} </div>
                ))
                }
            </div>
            
        </div>
    );
};

export default SkippingEffect;