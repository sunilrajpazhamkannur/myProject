import Todo from "./Todo"

const TodoList=({nirList,setTodoList})=>
{
    return(
        <div> {nirList.map((nirItems)=>(
            <Todo key={nirItems.id} nirItems={nirItems} todoList={nirList} setTodoList={setTodoList}/>
        ))}</div>
    )
}
export default TodoList