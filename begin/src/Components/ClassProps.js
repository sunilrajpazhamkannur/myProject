import { Component } from "react";

class ClassProps extends Component
{
    render()
    {
        return (
        <h1> Messsage: , {this.props.Msg} 
                    {this.props.children}      </h1>)
    }
}
export default ClassProps