import React from "react";
import CreateNewTaskBtn from "../components/CreateNewTaskBtn";
import CreateTaskModal from "../components/CreateTaskModal";
import Overlay from "../components/Overlay";
import TodoList from "../components/TodoList";

class Home extends React.Component
{
    constructor()
    {
        super();

        const rawUserData = localStorage.getItem("main");
        let userData = [];

        if(rawUserData)
        {
            userData = JSON.parse(rawUserData);
        }

        this.state = {
            overlayIsOpen : false,
            tasks : userData
        }
    }

    //open the gray overlay
    openOverlay = () => {
        this.setState({
            overlayIsOpen : true,
        })
    }

    //close the gray overlay
    closeOverlay = () => {
        this.setState({
            overlayIsOpen : false,
        })
    }

    taskConfirmed = (userCreatedTask) => {
        this.closeOverlay();

        const arr = this.state.tasks;
        arr.push(userCreatedTask);

        this.setState({
            tasks : arr
        })

        localStorage.setItem("main", JSON.stringify(arr));
    }

    //deleting an todo box
    onDeleteHandler = (index) =>
    {
        const arr = this.state.tasks;
        arr.splice(index, 1);
        this.setState({tasks : arr});
        localStorage.setItem("main", JSON.stringify(arr));
    }

    render(){
        return (
            <div>
                <h1>Personal Todo List</h1>
                <CreateNewTaskBtn createATask={this.openOverlay} />
                {this.state.overlayIsOpen ? <Overlay onClick={this.closeOverlay}/> : null}
                {this.state.overlayIsOpen ? <CreateTaskModal  onConfirmed={this.taskConfirmed}/> : null}
                <br></br>

                <TodoList data={this.state.tasks} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}

export default Home;