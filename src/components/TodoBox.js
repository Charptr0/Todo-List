import React from "react";
import styles from "./TodoBox.module.css"

class TodoBox extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    //pass the box index up to main
    deleteTodoPasser = () => {
        this.props.deleteEntry(this.props.index)
    }

    render() {
        return (<div id="todo-box">
            <p id={styles.title}><strong>{this.props.title}</strong></p>
            <p id={styles.desc}>{this.props.desc}</p>
            <p>{this.props.priority}</p>
            <p>{this.props.index}</p>
            <button id={styles.delete_btn} onClick={this.deleteTodoPasser}><strong>Delete</strong></button>
        </div>)
    }
}

export default TodoBox;