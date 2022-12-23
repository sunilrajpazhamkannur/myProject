import { useState } from "react"
import Counter from "./Counter";
import Message from "./Message";
export default function ConditionalComponent()
{
    const[display,setDesplay]=useState(true);
    let output;
    //ternary operator
    display ?
    (
        output=<div>Its True Part  <Message/> </div> 
        ):
    (
        output=<div>Else Part <Counter/></div>
    )
    
    return(output)
    
    
    
        

   
   

   
}