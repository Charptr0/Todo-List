import React from "react";
import styles from "./TodoBox.module.css"

class TodoBox extends React.Component
{
    //pass the box index down the call stack
    deleteTodoPasser = () => {
        this.props.deleteEntry(this.props.index);
    }

    render() {
        return (<div id="todo-box" className={
                this.props.priority === "Low" ? styles.low_priority : (this.props.priority === "Medium" ? styles.med_priority : styles.high_priority)}>
            <p id={styles.title}><strong>{this.props.title}</strong></p>
            <p id={styles.desc}>Description: {this.props.desc}</p>
            <p id={styles.priority}>Priority: {this.props.priority}</p>
            <button id={styles.delete_btn} onClick={this.deleteTodoPasser}><strong>Delete</strong></button>
        </div>)
    }
}

export default TodoBox;