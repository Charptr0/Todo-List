import react from "react";
import styles from "./TodoBox.module.css"

class TodoBox extends react.Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (<div id="todo-box">
            <p id={styles.title}><strong>{this.props.title}</strong></p>
            <p id={styles.desc}>{this.props.desc}</p>
            <p>{this.props.priority}</p>
            <button id={styles.delete_btn} onClick="adad"><strong>Delete</strong></button>
        </div>)
    }



}

export default TodoBox;