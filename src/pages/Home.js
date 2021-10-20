import React from "react";
import TraverseBtn from "../components/TraverseBtn";
import CreateNewTaskBtn from "../components/CreateNewTaskBtn";
import CreateTaskModal from "../components/CreateTaskModal";
import Overlay from "../components/Overlay";
import TodoList from "../components/TodoList";

class Home extends React.Component
{
    constructor()
    {
        super();

        //grab todo from memory
        const rawUserData = localStorage.getItem("data");
        let userData = [];

        //if data exist in local storage
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

    //append a new entry to the array
    taskConfirmed = (userCreatedTask) => {
        this.closeOverlay();

        const arr = this.state.tasks;
        arr.push(userCreatedTask);

        this.setState({
            tasks : arr
        })

        //store the new entry into local storage
        localStorage.setItem("data", JSON.stringify(arr));
    }

    //deleting an todo box
    onDeleteHandler = (index) =>
    {
        const arr = this.state.tasks;
        arr.splice(index, 1);
        this.setState({tasks : arr});

        //remove the entry into local storage
        localStorage.setItem("data", JSON.stringify(arr));
    }

    render(){
        return (
            <div id="home">
                <h1>Personal Todo List</h1>
                <CreateNewTaskBtn createATask={this.openOverlay} />
                {this.state.overlayIsOpen ? <Overlay onClick={this.closeOverlay}/> : null}
                {this.state.overlayIsOpen ? <CreateTaskModal  onConfirmed={this.taskConfirmed}/> : null}
                <TraverseBtn txt="About" to="/about"/>

                <br></br>

                <TodoList data={this.state.tasks} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}

export default Home;