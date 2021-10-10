import react from "react";
import CreateTaskModal from "./CreateTaskModal";
import Overlay from "./Overlay";
import Todo from "./Todo"

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

        console.log(this.state.tasks);
    }

    onDelete = (index) =>
    {

    }

    render(){
        return (
            <div>
                <button id="new-todo-btn" onClick={this.openOverlay}></button>
                {this.state.overlayIsOpen ? <Overlay onClick={this.closeOverlay}/> : null}
                {this.state.overlayIsOpen ? <CreateTaskModal  onConfirmed={this.taskConfirmed}/> : null}
                <br></br>
                
                <Todo data={this.state.tasks} onDelete={this.onDelete} />
    
            </div>
        )
    }
}

export default Main;