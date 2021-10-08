import TodoBox from "./TodoBox";

function TodoList(props)
{

    return (
        <div>
            {props.data.map((tasks, index)=> 
                <div id="task-div">
                    <TodoBox title={tasks.title} 
                        desc={tasks.desc} 
                        priority={tasks.priority}
                        index = {index}
                        onDelete={props.onDelete()}/>
                </div>)}
        </div>
    )
}

export default TodoList;