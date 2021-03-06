import React from "react";
import TodoBox from "./TodoBox";

class TodoList extends React.Component
{
    deleteEntry = (index) =>
    {
        this.props.onDelete(index);
    }

    render()
    {
        return (
            <div>
                {this.props.data.map((task, key)=> 
                    <div id="task-div" key={key} >
                        <TodoBox title={task.title} 
                            desc={task.desc} 
                            priority={task.priority}
                            index = {key}
                            deleteEntry={this.deleteEntry}
                            />
                    </div>)}
             </div>
        )
    }
}

export default TodoList;