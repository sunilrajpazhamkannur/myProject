
import UseForm from './UseForm'
import '../Component/style.css'

export const CustomeHook = () => {
    const [value,setHandelChange]=UseForm({
      name: "",
      email: "",
      username: "",
      Password: "",
      CPassword:"",
      SWord:"",
    
    })
    


    return(
    <div>
      <h3> name: {value.name}</h3>
      <h3> email: {value.email}</h3>
      <h3> USER NAME: {value.username}</h3>
      <h3> PASSWORD: {value.Password}</h3>
      <h3> Confirm Password: {value.CPassword}</h3>
      <h3> Security Question: {value.SWord}</h3>

      <input type='text' className='tstyle' placeholder='name' name='name' value={value.name} onChange={setHandelChange}></input> <br/>
      <input type='text' className='tstyle' placeholder='name@email.com' name='email' value={value.email} onChange={setHandelChange}></input> <br/>
      <input type='text' className='tstyle' placeholder='username' name='username' value={value.username} onChange={setHandelChange}></input> <br/>
      <input type='password' className='tstyle' placeholder='password' name='Password' value={value.Password} onChange={setHandelChange}></input> <br/>
      <input type='password' className='tstyle' placeholder='confirm password' name='CPassword' value={value.CPassword} onChange={setHandelChange}></input> <br/>
      <input type='text' className='tstyle' placeholder='security question' name='SWord' value={value.SWord} onChange={setHandelChange}></input> <br/>
      

      
    </div>
  )
}

export default CustomeHook
