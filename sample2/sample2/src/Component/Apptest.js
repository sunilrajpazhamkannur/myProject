import React, { useState } from 'react'

const Apptest = () => {
    const [name,setName]=useState("world Net")

    const btnClick =()=>{
        setName('');
    }
  return (
    <div>
      <h1>welcome {name}</h1>
      <button onClick={btnClick}>Reset</button>

    </div>
  )
}

export default Apptest
