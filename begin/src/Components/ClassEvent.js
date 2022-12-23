import { Component } from "react";

class ClassEvent extends Component
{
    handleEvent()
    {
        console.log('Class Event Generated...')
    }
    render()
    {
    return (
        <div>
            Event Handling form Class Method
            <button onClick={this.handleEvent}> Click Me</button>
        </div>
    )

    }
}
export default ClassEvent