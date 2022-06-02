import React, { useEffect, useRef } from 'react';

const TimerWithRefId = () => {
    const setIntervalRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            // something to be done every 100ms
        }, 100)
        // this is where the interval ID is saved in the ref object 
        setIntervalRef.current = intervalId;
        return () => {
            clearInterval(setIntervalRef.current)
        }

    }, [])

    return (
        <div>
            <p> I am your Best Friend </p>
        </div>
    );
};

export default TimerWithRefId;