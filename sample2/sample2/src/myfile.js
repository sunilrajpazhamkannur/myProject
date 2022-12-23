import {useState} from "react";
import Counter from "./Counter";
import Employee from "./Employee";

function MyFun()
{
     let emp=[{name: 'SUNILRAJ', Age : 35}, 
     {name: 'SHANSHA',Age:'28'},
    // {name:'NIRANJANA',Age:8},
    // {name:'ADITHYAN',Age:6}
        ]  
    const [x,countFun]=useState(0)
    const addFunction=()=> 
        {
        countFun(x+1);
        }
    const obj={title: 'First :',x:x }
   // console.log({...obj})
        return(
            <div className="MyFun">
            <h1>********* MyFun() ************</h1>    
            <button onClick={addFunction}>My Click</button>
            <Counter title='First Counter: ' x={x}/>
            <Counter title='Second Counter: ' x={x}/>
            <Counter title='Third Counter'  x= {obj.x} />
            <Counter {...obj} />
           
           {
            emp.map((obj1,index)=>
             //   return(
                    <Employee key ={index} name={(obj1.name)} Age={(obj1.Age)} />
                    //<Employee key={index} {...obj1} />
                   //    )                            
           )
        }
            </div>);
}
export default MyFun;