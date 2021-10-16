import React from "react";

class CreateNewTaskBtn extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div>
                <button id="new-todo-btn" onClick={this.props.createATask}></button>
            </div>
        )
    }
}

export default CreateNewTaskBtn;