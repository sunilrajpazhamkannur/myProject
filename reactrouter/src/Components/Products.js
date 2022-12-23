import './style.css'
import {Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
   
     <input type='text' className='textStyle' placeholder='Search product'></input>
    <button className='buttonStyle'>search</button>
   
    <div >
      <br/>
      <Link to='feature' >Featured</Link>
      <Link to='new' >New</Link>
      <Outlet/>
      </div>
      
    </>
  )
}

export default Products
