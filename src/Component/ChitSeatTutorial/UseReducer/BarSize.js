import React, { useReducer, useState } from 'react';

const initialState = { width: 15 };

const reducer = (state, action) => {

    switch (action) {
        case 'plus':
            return { width: state.width + 15 }
        case 'minus':
            return { width: Math.max(state.width - 15, 2) }
        default:
            throw new Error("what's going on ?")
    }
}


const BarSize = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
            <div style={{ marginTop: "10px" }}>
                <button type="submit" onClick={() => dispatch('plus')}> increase size </button>
                <button type="submit" onClick={() => dispatch('minus')}>Decrease size </button>
            </div>

        </div>
    );
};

export default BarSize;