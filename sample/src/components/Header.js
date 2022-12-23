import { Component } from "react"

function Header(props)
{
 return (<h1>Hi, I am { props.data1}</h1>)   
}
export default Header

class Header2 extends Component
{
    render(){
 return (<h1>Hi, I am { this.props.data3}</h1>)   
}
}
export {Header2}