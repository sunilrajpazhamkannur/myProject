import { Component } from "react";

class Counter extends Component
{

    constructor()
    {
        super();
        this.state={
            counter:0
        }
        this.increament=this.increament.bind(this);
    }
    increament()
    {
        this.setState({counter:this.state.counter+1})
    }

    increament2=()=>
    {
        this.setState({counter:this.state.counter+1})
    }
    render()
    {
        return (<div>
        <h1>Counter Value Is: {this.state.counter} </h1>
        <button onClick={()=> this.increament()}>Click Me </button> |
        <button onClick={this.increament}> Binding-Click</button> |
        <button onClick={this.increament2}>Binding 2 Way</button> 

        </div>
        )
    }
}
export default Counter