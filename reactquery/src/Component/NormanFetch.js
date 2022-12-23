
import React,{useState} from 'react'
import axios from "axios"

export default function NormanFetch() {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const [error,setError]=useState('')
    
    const fetchUser=async () =>{
        
    try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
        setLoading(false)
    }
    catch(err)
    {
        setLoading(false)
        setError(err)
    }
    }

    
  return (
    <div>
        
       <h1> NORMAL FETCHING </h1>
       <button onClick={fetchUser}> NORMAL FETCHING</button>
       {loading && <h1> loading..</h1>}
       {error && <h1>{error.message}</h1>}
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
