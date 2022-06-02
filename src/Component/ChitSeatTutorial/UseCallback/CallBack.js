import React, { useState } from 'react';
import Age from './Age';
import Instructions from './Instructions';

const CallBack = () => {
  const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
    const someValue = { value: "someValue" }
    const doSomething = () => {
      return someValue
    }
  
    return (
      <div>
        <Age age={age} handleClick={handleClick}/>
        <Instructions doSomething={doSomething} />
      </div>
    )
}
 

export default CallBack;