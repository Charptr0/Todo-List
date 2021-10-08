import TodoBox from "./TodoBox";
import react from "react";

class Todo extends react.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            tasks : props.data
        }
    }

    render() {
        return (
            <div>
            {this.state.tasks.map((task, index)=> 
                <div id="task-div">
                    <TodoBox title={task.title} 
                        desc={task.desc} 
                        priority={task.priority}
                        index = {index}
                        />
                </div>)}
        </div>
        )
    }
}

export default Todo;