import TodoBox from "./TodoBox";
import react from "react";

class Todo extends react.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            data : props.data
        }
    }

    deleteEntry = (index) =>
    {
        this.props.onDelete(index);
    }

    render() {
        return (
            <div>
            {this.state.data.map((task, index)=> 
                <div id="task-div">
                    <TodoBox title={task.title} 
                        desc={task.desc} 
                        priority={task.priority}
                        index = {index}
                        deleteEntry={this.deleteEntry}
                        />
                </div>)}
        </div>
        )
    }
}

export default Todo;