import { useNavigate, Outlet, useSearchParams } from "react-router-dom"
import '../style.css'

const UserPage = () => {
    const navigate =useNavigate()

    const [searchParam,setSearchParam]=useSearchParams()
    const showActUsers=searchParam.get('filter')==='active'

  return (


    <>
        <br/>
     <button className="buttonStyle" onClick={()=>navigate('users/1')}>User-1</button> <br/>
     <button className="buttonStyle" onClick={()=>navigate('users/2')}>User-2</button><br/>
     <button className="buttonStyle" onClick={()=>navigate('users/3')}>User-3</button><br/>
     <button className="buttonStyle" onClick={()=>navigate('users/admin')}>Admin</button><br/>
     
     <Outlet/>
     <button onClick={()=>  setSearchParam({filter:'active'})}>Show Activie Users</button>
     <button onClick={()=> setSearchParam({}) }>Reset all Users</button>
     {
        showActUsers?(<h2> Showing Active Users</h2>):(<h1>Show All Users</h1>)
     }
    </>
    
  )
}

export default UserPage
