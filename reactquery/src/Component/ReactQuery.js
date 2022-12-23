import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function ReactQuery() {
    
   
      
  const {isloading,data}=useQuery('users',()=>axios.get('https://jsonplaceholder.typicode.com/users')
  )
  
  
    
  return (
    <div>
       <h1> REACT QUERY </h1>
      
       {isloading && <h1>loading....</h1>}
      {
        
        data?.data.map((user)=> 
        <div key={user.id}>
          {user.name}
        </div>
        )   
      }
      
    </div>
  )
}
