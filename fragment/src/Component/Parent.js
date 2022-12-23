import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [pCount,setPCount]=useState(0)
    const [clCount,setClCount]=useState(0)
    const incParent=()=>{
          setPCount(pCount+1)
    }
    const incChild=()=>{
        setClCount(clCount+1)
  }
    

    
  return (
    <div>
      <h1>Parent Count: {pCount}</h1>
      <Child count={clCount}/>
      <button onClick={incParent}>Increment Parent</button>
      <button onClick={incChild}>Increment Child</button>
    </div>
  )
}


