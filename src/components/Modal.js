import styles from "./Modal.module.css";

function Modal(props)
{
    return (
        <div id="modal" className={styles.fade_in}>
            <p id="todo-name" class={styles.txt}><strong>The Name of the Task</strong></p>
            <input id={styles.task_name_input}></input>
            <p id="todo-desc" class={styles.txt}><strong>Description</strong></p>
            <textarea id={styles.desc_input}></textarea>
            <p id="todo-priority" class={styles.txt}><strong>Priority Level</strong></p>
            <select>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <br></br>
            <button id={styles.confirm_btn} onClick={props.onConfirmed}>Confirm</button>
        </div>
    )
}

export default Modal;