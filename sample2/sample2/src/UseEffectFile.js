import React from 'react' 
import UseCounter from './UseCounter';
import { useState } from 'react'

function UseEffectFile() {
    const [state,setState]=useState(false)
    
  return (
    <div className='UseEffectFile'>
       
    <h1>*************use effect****************</h1>
    <h1 onClick={()=> setState(!state)}>Hide/Show</h1>
    {state ? <UseCounter/> : null    }
    {state && <UseCounter/>}    

    </div>
  );
}

export default UseEffectFile
