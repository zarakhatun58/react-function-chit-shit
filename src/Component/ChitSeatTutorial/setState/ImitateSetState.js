import React, { useReducer } from 'react';


const initialState = { width: 15 }; 

  const reducer = (state, newState) => ({
    ...state,
    width: newState.width
  })

const ImitateSetState = () => {
  const [state, setState] = useReducer(reducer, initialState)
 

  return (<>
    <div style={{ background: 'teal', height: '30px', width: state.width }}></div>
    <div style={{marginTop: '3rem'}}>
        <button onClick={() => setState({width: 100})}>Increase bar size</button>
        <button onClick={() => setState({width: 3})}>Decrease bar size</button>
    </div>
    </>
  )
}


export default ImitateSetState;