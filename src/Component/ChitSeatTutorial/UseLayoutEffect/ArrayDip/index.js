import React, { useLayoutEffect, useState } from 'react';

const ArrayDip = () => {

    const [randomNumber, setRandomNumber]=useState(0);
    const [effectLogs, setEffectLogs]=useState([]);

useLayoutEffect( () =>{
setEffectLogs( prevEffectLogs =>[...prevEffectLogs, 'effect'])
}, [randomNumber])



    return (
        <div>
            <h2>{randomNumber}</h2>
            <button type="submit" onClick={ ()=>{setRandomNumber(Math.random)}}>random number</button>
            <div>
                {
                    effectLogs.map( (effect, index) =>(
                        <div key={index}>{'🍔'.repeat(index) + effect}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default ArrayDip;