import { useState } from "react"
import ListItem from "./ListItem";

const styles =  {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      fontFamily : undefined,
      fontSize : 24,
      fontStyle : 'italic',
      fontWeight : 'bold',
      color: 'green' ,
    }
  
  
function Todo()
{
    const [todo,setTodo]=useState("");
    const [todoList,setTodoList]=useState([])

    const handleChange=(event)=> {
        setTodo(event.target.value);
         }
    const handleSubmit =(event)=>{
            event.preventDefault();
            let tempList=todoList;
             tempList.push(todo);
             setTodoList(tempList)
             console.log(todoList);
             setTodo("")
             
         }

 return(
    <div> 
        <form onSubmit={handleSubmit}>
            Message : <input type="text" style={styles} value={todo} onChange={handleChange}></input><br/>
            <button type="submit" style={styles}>Add Details</button>

        </form>
        {todoList.map((item)=>(
            <h2>{item}</h2>
        ))}

        {todoList.map((Item)=>(
            <ListItem key={Item} name={Item}> List Item</ListItem>
            ))}
    </div>
 )
}
export default Todo