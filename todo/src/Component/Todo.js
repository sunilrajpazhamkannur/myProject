import styles from './style.module.css'
const Todo=({nirItems,todoList,setTodoList})=>
{
    const deleteTodo =()=>
    {
        const tmp=todoList.filter((item)=>item.id !==nirItems.id)
        setTodoList(tmp)

       // todoList.filter((item)=>console.log(item.name))

    }
    return(
        <div>
            <div className={styles.todoitem}>
                <h3>{nirItems.name}</h3>
                <button onClick={deleteTodo} className={styles.btndone}>Delete</button>
                
                
            </div>
        </div>
    )
}
export default Todo