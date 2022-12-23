import { useState } from "react";
import Child1 from "./Child1";

export default function Parent1(){
    const [count,setCcount]=useState(0)
    const [childCount,setChildCount]=useState(0)
    const parentClick =()=>{
        setCcount(count+1)
    }
    const childClick =()=>{
        setChildCount(childCount+1)
    }
    return(
        <div>

          <h1> Parent Click: {count}</h1> 
          <Child1 count1={childCount}/>
          <button onClick={parentClick}>Parent Count</button>
          <button onClick={childClick}>Child Click</button>
         
            </div>
    )

}