import styles from "./TodoBox.module.css"

function TodoBox(props)
{
    return (<div id="todo-box">
        <p id={styles.title}><strong>{props.title}</strong></p>
        <p id={styles.desc}>{props.desc}</p>
        <p>{props.priority}</p>
        <button id={styles.delete_btn}><strong>Delete</strong></button>
    </div>)

}

export default TodoBox;