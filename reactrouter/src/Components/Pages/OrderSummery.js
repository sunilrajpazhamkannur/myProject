import { useNavigate } from "react-router-dom"

const OrderSummery = () => {
  const navigate=useNavigate()
  return (
    <div>
     <h3>Order Confirmred...</h3>
     <br/>
     <br/>
     <br/>
     <br/>
     <button onClick={()=>navigate(-1)}>Go Back</button>
     

    </div>
  )
}

export default OrderSummery
