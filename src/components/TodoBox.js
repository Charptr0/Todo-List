import styles from "./TodoBox.module.css"

function TodoBox(props)
{
    return (<div id="todo-box">
        <p id={styles.title}>{props.title}</p>
        <p id={styles.desc}>{props.desc}</p>
        <p>{props.priority}</p>
        <button>Click me</button>
    </div>)
}

export default TodoBox;