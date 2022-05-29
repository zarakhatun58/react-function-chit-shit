import React, { useState } from 'react';

const Objects = () => {
    const [state, setState] = useState({ age: 19, siblingsNum: 4 })

    const handleClick = val =>{
        setState({
            ...state,
            [val]: state[val] + 1
          })
        
    }
    const { age, siblingsNum } = state

  return (
    <div style={{display:"flex"}}>
      <div>
      <p>Today I am {age} Years of Age</p>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        
      </div>
      <div>
      <p>I have {siblingsNum} siblings</p>
      <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
    );
};

export default Objects;