import TodoBox from "./TodoBox";

function TodoList(props)
{
    console.log(props.data)
    return (
        <div>
            {props.data.map((tasks)=> <TodoBox title={tasks.Title} desc={tasks.Desc} priority={tasks.priority}/>)}
        </div>
    )
}

export default TodoList;