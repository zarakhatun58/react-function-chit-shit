import React, { useState } from 'react';

const Counts = () => {
//
 const [count, setCount] = useState(100);

 //updater function returned by the useState
  const [age, setAge]=useState(19);
  const handleClick=()=>{
      setAge(age+1);
  }
  // sibling/ brother /sister count 
  const [sibling, setSibling]=useState(10);
  const handleSibling=()=>{
      setSibling(sibling+1);
  }
    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
           <div>
           <p>stateVariable is {count} </p>
           </div>
            <div>
          
                <p> Today my age {age}</p>
                <button type="submit"  onClick={handleClick} style={{backgroundColor:"red"}}>getOlder</button>
            </div>
            <div>
                <p> I have sibling{sibling}</p>
                <button type="submit" onClick={handleSibling} style={{backgroundColor:"yellow"}}>get more</button>
            </div>
        </div>
    );
};

export default Counts;