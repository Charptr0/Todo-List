import TodoBox from "./TodoBox";

function TodoList(props)
{
    console.log(props.data)
    return (
        <div>
            {props.data.map((tasks)=> <TodoBox title={tasks.title} desc={tasks.desc} priority={tasks.priority}/>)}
        </div>
    )
}

export default TodoList;