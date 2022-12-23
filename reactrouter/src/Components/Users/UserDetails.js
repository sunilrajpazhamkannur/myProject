import { useParams } from "react-router-dom"

const UserDetails = () => {
    //const param=useParams()
    //const userid=param.userId
    const {userId}=useParams()

    

  return (
    

    <div>
    <h1>Details about users {userId}</h1>
    </div>
  )
}

export default UserDetails
