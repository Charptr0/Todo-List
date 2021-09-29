import styles from "./Modal.module.css";

function Modal(props)
{
    return (
        <div id="modal" className={styles.fade_in}>
            <p id="todo-name" class={styles.txt}><strong>The Name of the Task</strong></p>
            <input id={styles.task_name_input}></input>
            <p id="todo-desc" class={styles.txt}><strong>Description</strong></p>
            <input id={styles.desc_input}></input>
            <p id="todo-priority" class={styles.txt}><strong>Priority Level</strong></p>
            <select id={styles.priority_selection}>
                <option id={styles.low}>Low</option>
                <option id={styles.med}>Medium</option>
                <option id={styles.high}>High</option>
            </select>
            <br></br>
            <button id={styles.confirm_btn} onClick={props.onConfirmed}>Confirm</button>
        </div>
    )
}

export default Modal;