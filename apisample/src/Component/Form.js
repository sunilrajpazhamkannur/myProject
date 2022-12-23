
import React,{useState} from 'react'
import './Users.css'
import PrintForm from './PrintForm'


export default function Form() 
{

    const [user,SetUser]=useState('')
    const [pwd,SetPwd]=useState('')
    const [domain,SetDomain]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        
       
    }
    
  return (
    <div className='users'>
        <p>
        <form onSubmit={handleSubmit}>
        <p> User : <input type='text' placeholder='enter user' onChange={(event)=>SetUser(event.target.value)}></input></p>
    
        <p>Password: <input type='text' placeholder='enter password' onChange={(event)=>SetPwd(event.target.value)}></input></p>
        <p>Domain: <input type='text' placeholder='enter domain' onChange={(event)=>SetDomain(event.target.value)}></input></p>
        <p><button type='submit'>Submit Form</button></p>
        <h2>Resule Goes Here</h2>   
        <PrintForm user={user} pwd={pwd} domain={domain}></PrintForm>

      </form>
      </p>
    </div>
  )
}
