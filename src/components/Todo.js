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

    deleteEntry = (index) =>
    {
        let arr = this.state["tasks"].splice(index, 1);
        this.setState({
            tasks : arr
        })

        this.props.onDelete(arr);
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
                        deleteEntry={this.deleteEntry}
                        />
                </div>)}
        </div>
        )
    }
}

export default Todo;