import React, { useState } from 'react';

const InitialState = () => {
    const [token]=useState(() =>{
        let token=window.localStorage.getItem("my-token");
        return token || "default#-token# what ever"
    })
    return (
        <div>
            <p> Token is {token}</p>
        </div>
    );
};

export default InitialState;