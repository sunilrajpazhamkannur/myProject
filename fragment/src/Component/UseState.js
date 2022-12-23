import { useEffect, useState } from "react"
export default function UseState()
 
    {
        const [resourceType,setUserResourceType]=useState('Post')
        const [windowwidth, setWindowWidth]=useState(window.innerWidth)
       
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }

        useEffect(()=>{
            window.addEventListener('resize',handleResize)
            })

        
        return(
            <div>
                <button onClick={()=>setUserResourceType('Post')}>Post</button>
                <button onClick={()=>setUserResourceType('User')}>User</button>
                <button onClick={()=>setUserResourceType('Comment')}>Comment</button>

                <h1>{windowwidth}</h1>
                <h2>{resourceType}</h2>
            </div>
        )
    }