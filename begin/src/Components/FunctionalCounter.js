import {useState} from 'react';

function FunctionalCounter()
{
    const [Counter,setCounter]=useState(0);
    const Increament = ()=> {
        setCounter(Counter+1)
    }
    const Decrement =() => {
        setCounter(Counter-1)
    }

    return(
        <div>
            <div> INCREMENT VALUE: {Counter}</div>
            
            <div> <button onClick={Increament}>Increment</button></div>
            <div> <button onClick={ Decrement}> DECREMENT</button></div>

        </div>
    )
}
export default FunctionalCounter