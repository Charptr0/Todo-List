import react from "react";
import CreateTaskModal from "./CreateTaskModal";
import Overlay from "./Overlay";
import TodoBox from "./TodoBox";

class Main extends react.Component
{
    constructor()
    {
        super();
        this.state = {
            overlayIsOpen : false,
            tasks : [],
        }
    }

    openOverlay = () => {
        this.setState({
            overlayIsOpen : true,
        })
    }

    closeOverlay = () => {
        this.setState({
            overlayIsOpen : false,
        })
    }

    taskConfirmed = () => {
        this.closeOverlay();
        
        const arr = this.state.tasks;
        arr.push({"title" : "hi",
        "desc" : "hello",
        "priority" : "high"})

        this.setState({
            tasks : arr,
        })
    }

    onDelete = (index) =>
    {
        const arr = this.state.tasks;
        arr.splice(index, 1);
        this.setState({tasks : arr});
    }

    render(){
        return (
            <div>
                <button id="new-todo-btn" onClick={this.openOverlay}></button>
                {this.state.overlayIsOpen ? <Overlay onClick={this.closeOverlay}/> : null}
                {this.state.overlayIsOpen ? <CreateTaskModal  onConfirmed={this.taskConfirmed}/> : null}
                <br></br>
                
                {this.state.tasks.map((task, key)=> 
                <div id="task-div">
                    <TodoBox title={task.title} 
                        desc={task.desc} 
                        priority={task.priority}
                        index = {key}
                        deleteEntry={this.onDelete}
                        />
                </div>)}
            </div>
        )
    }
}

export default Main;