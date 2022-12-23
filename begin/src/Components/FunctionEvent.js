function FunctionEvent()
{
    function handleClick()
    {
            console.log('button clicked....')
    }
    const handleClick1 =()=> {
        console.log("Second Button Clicked....")
    };
    return(
        <di>
            functional FunctionEvent
            <button onClick={handleClick}>Button Click</button>
            <button onClick={handleClick1}>Second Button</button>
        </di>
    )
}
export default FunctionEvent