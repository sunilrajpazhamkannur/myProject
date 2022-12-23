
import{useState} from 'react'
import Apptest from './Component/Apptest'

function App()
{
    const [count,setCount]=useState(0)   
    const addCount=()=>
            {
    setCount(count+1)
    console.log(count);
            }
    return(
    <div className="App">
        <h1>COUNT : {count}</h1>
        <button onClick={addCount}>Click me</button>

        <Apptest/>

    </div>
    );
}
export default App;