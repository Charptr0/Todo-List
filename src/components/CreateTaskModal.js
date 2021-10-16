import React from "react";
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
                    <label id="todo-name" htmlFor="task-name" className={styles.txt}><strong>The Name of the Task</strong></label>
                    <br></br>
                    <input type="text" id={styles.task_name_input} className={styles.input} name="task-name" ref={this.taskName}></input>
                    <br></br>

                    <label id="todo-desc" htmlFor="task-desc" className={styles.txt}><strong>Description</strong></label>
                    <br></br>
                    <input type="text" id={styles.desc_input} name="task-desc" className={styles.input} ref={this.taskDesc}></input>
                    <br></br>
                    
                    <label id="todo-priority" htmlFor="task-priority" className={styles.txt}><strong>Priority Level</strong></label>
                    <br></br>
                    <select id={styles.priority_selection} name="task-priority" className={styles.input} ref={this.taskPriority}>
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