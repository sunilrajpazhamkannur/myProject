import { Component } from "react";

class Form extends Component
{
    state={
        fname:"",
        lname:"",
    }
    fnameChange=(event)=>{
        this.setState({
            fname:event.target.value,
        })
    }
    lnameChange=(event)=> {
        this.setState({
            lname: event.target.value,
        })
    }
    formSubmit =(event)=>{
        event.preventDefault();
        console.log({
        fname: this.state.fname,
        lname: this.state.lname,
    });
    }

    render()
    {
        return(<div>
            <form onSubmit={this.formSubmit}>
           First Name :<input onChange={this.fnameChange} type="text" value={this.state.fname}></input><br/>
           LastName<input onChange={this.lnameChange} type="text" value={this.state.lname}></input>
           <button type="submit">Submit Me</button>
           </form>
            </div>)
    }
}
export default Form