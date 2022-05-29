import React, { useEffect } from 'react';

const MultipleEffect = () => {

useEffect( () =>{
    const clicked=()=>console.log('window clicked')//alert('window clicked') //
    window.addEventListener('click', clicked)

return()=>{
    window.removeEventListener('click', clicked)
}

}, [])  

useEffect( ()=>{
    console.log('another useEffect all');
})
    return (
        <div>
           <p> Check your console logs</p> 
        </div>
    );
};

export default MultipleEffect;