import { useState } from "react"
import styles from "./style.module.css"
import ListView from "./ListvView.";

function Todo()
{
const [todo,setTodo]=useState("");
const [todoList,setTodoList]=useState([]);

const handleEvent=(event)=>{
            setTodo(event.target.value)
            
        }
const handleClick=(event)=>{
    event.preventDefault();
    let tempList=todoList
    tempList.push(todo);
    setTodoList(tempList)
    console.log(todoList);
    setTodo("")


}

    return(
        <div>
            <form onSubmit={handleClick}>
            <h2 className={styles.message}>Message</h2>
            <input type="text" value={todo} onChange={handleEvent} className={styles.textStyle}></input>
            <button type="submit" className={styles.btnStyle}>Submit</button>
            </form>
            {
            todoList.map((Item)=>(
                <div>
               
                <ListView key={Item} name={Item}/>
                </div>

            ))}

        </div>
    )
}
export default Todo