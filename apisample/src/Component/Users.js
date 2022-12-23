import React,{useRef,useEffect, useState} from 'react'
import "./Users.css"
import axios from 'axios'

export default function Users()
 {
    const input1=useRef(null);

    const [data,setData]=useState([])
   const fetchUsers= async ()=>{
   const response=await axios.get( 'https://jsonplaceholder.typicode.com/users')
   
    //const data1=response.data
    setData(response.data)    

    }
   
     useEffect(()=>{
        fetchUsers();
        input1.current.focus();
     },[input1])

  return (
    

    <div className='users'>
      <h1> AXIOS EXAPLES </h1>
      <button onClick={fetchUsers}> Get data</button>
      <input ref={input1} type='text'></input>
        {
                data.map(item=>(
                        <div key={item.id}>User: {item.name}  
                        <p>Email: {item.email}</p>
                        <p>{item.address?.street}</p>
                        <p>{item.address?.suite}</p>
                        <p>{item.address?.city}</p>
                        <p>{item.address?.zip}</p>
                        <p>&nbsp;</p>
                        </div>
                        
                       
                ))
        }

    </div>
  )
}
