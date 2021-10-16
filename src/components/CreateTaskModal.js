import React, { useRef } from "react";
import styles from "./Modal.module.css";

class CreateTaskModal extends React.Component
{
    constructor(props)
    {
        super(props);
        this.taskName = React.createRef();
        this.taskDesc = React.createRef();
        this.taskPriority = React.createRef();
    }

    onSubmit = (event) =>
    {
        event.preventDefault();

        let title = this.taskName.current.value;
        let desc = this.taskDesc.current.value;
        const priority = this.taskPriority.current.value;

        if(title === "")
        {
            title = "Untitled Task";
        }

        if(desc === "")
        {
            desc = "No description provided";
        }

        const userCreatedTask = {
            "title" : title,
            "desc" : desc,
            "priority" : priority
        }
        
        this.props.onConfirmed(userCreatedTask);
    }

    render()
    {
        return (
            <div id="modal" className={styles.fade_in}>
                <form onSubmit={this.onSubmit}>
                    <label id="todo-name" htmlFor="task-name" class={styles.txt}><strong>The Name of the Task</strong></label>
                    <input type="text" id={styles.task_name_input} required id="task-name" ref={this.taskName}></input>

                    <label id="todo-desc" htmlFor="task-desc" class={styles.txt}><strong>Description</strong></label>
                    <input type="text" id={styles.desc_input} required id="task-desc" ref={this.taskDesc}></input>

                    <label id="todo-priority" htmlFor="task-priority" class={styles.txt}><strong>Priority Level</strong></label>
                    <select id={styles.priority_selection} required id="task-priority" ref={this.taskPriority}>
                        <option id={styles.low}>Low</option>
                        <option id={styles.med}>Medium</option>
                        <option id={styles.high}>High</option>
                    </select>

                    <br></br>
                    <button id={styles.confirm_btn} onClick={this.onSubmit}>Confirm</button>
                </form>
            </div>
        )
    }
}

export default CreateTaskModal;