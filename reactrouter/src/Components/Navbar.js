

import { NavLink } from 'react-router-dom'
import './style.css'

export const  Navbar =()=>{
 const navLinkStyle=({isActive})=>{
  return{
    fontWeight: isActive? 'bold':'normal',
    textDecoration:isActive ? 'underline':'none',
  }

 }
  return (
 <nav className='nav'>
    
    <NavLink style={navLinkStyle} to='/'>Home</NavLink>
    <NavLink style={navLinkStyle} to='/todo'>Todo App</NavLink> 
    <NavLink style={navLinkStyle} to='/products'>Products</NavLink> 
    <NavLink style={navLinkStyle} to='/users'>Users</NavLink>    
    <NavLink style={navLinkStyle} to='/about'>About</NavLink>
    
   </nav>
  )
}



