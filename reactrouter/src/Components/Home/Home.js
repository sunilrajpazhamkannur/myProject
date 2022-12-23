import { useNavigate } from "react-router-dom"

  const Home =()=>{
const navigate =useNavigate('')
  return (
    <div>
      <h1>Home Page</h1>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>navigate('/order-summery')}>Place Order</button>
    </div>
  )
}
export default Home