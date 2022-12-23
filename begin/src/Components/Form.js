import { Component } from "react";

class Form extends Component
{
    state={
        firstname : "",
        lastname : "",
    }
handleChange=(event)=>{
this.setState({
    firstname:event.target.value,
});

}
handlelastChange =(event)=>{
    this.setState({
        lname: event.target.value,
    })
}


    render(){
        return(<div>
            <form>
                <input type="text" value={this.state.firstname} onChange={this.handleChange}></input>
                <input type="text" value={this.state.lname} onChange={this.handlelastChange}></input>
                </form>
        </div>)
    }
}
export default Form