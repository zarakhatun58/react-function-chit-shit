import React, { useState } from 'react';

const PlusMinus = () => {
    const [count, setCount]=useState(0);
    
    return (
        <div style={{display:"flex"}}>
           
            <div>
            <p>Count value is{count}</p>
            <button type="submit" onClick={() =>setCount(0)}>Reset</button>
                <button type="submit" onClick={() =>setCount(prevCount =>prevCount +1)}>Plus+</button>
            </div>
            <div>
            <p>Count value is{count}</p>
                <button type="submit" onClick={() =>setCount(prevCount =>prevCount -1)}>Minus-</button>
            </div>
        </div>
    );
};

export default PlusMinus;