import React,{useState,useEffect} from 'react'

function UseCounter() {
    useEffect(()=>{console.log('Mounting....')
  return ()=>
  {    console.log('Unmounting....') }
  })
}

export default UseCounter
