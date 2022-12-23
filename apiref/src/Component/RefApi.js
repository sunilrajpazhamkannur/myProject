import React,{useRef} from 'react'
import  './style.css'
import axios from 'axios'



export default function RefApi() {
  const name =useRef()
  const pwd =useRef()
  const domain =useRef()


  const handleSubmit=(event)=>{
    event.preventDefault();
    const namef=name.current.value
    const pwdf=pwd.current.value;
    const domainf=domain.current.value;

    const data={
      name: namef,
      pwd:pwdf,
      doman:domainf
    }
    

 /*
  fetch("https://api-post-46105-default-rtdb.firebaseio.com/react.json",{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type' : 'applicaiton/json'
    }
  })*/
  axios.post("https://api-post-46105-default-rtdb.firebaseio.com/.json",{
    body: JSON.stringify(data),
    headers :{
      'Content-Type' : 'application/json'
    }

  })


}

  
  return (
    <div>
      <form className='RefApi' onSubmit={handleSubmit}>
      Username : <input type='text' className='styletext' ref={name} placeholder='enter user name' required></input><br/>
      Password : <input type='text' className='styletext' ref={pwd} placeholder='enter user Password'></input><br/>
      Doman : <input type='text' className='styletext' ref={domain} placeholder='enter domain '></input><br/>
      <button className='styletext'>Submit Form</button><br/>
      </form>
    </div>
  )
}
