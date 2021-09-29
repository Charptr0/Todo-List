import {useState} from "react"
import Modal from "./Modal";
import Overlay from "./Overlay";
import TodoBox from "./TodoBox";

let tasks = []

function CreateTodoButton(props)
{
    const [overlayIsOpen, setOverlay] = useState(false);

    function openOverlay() {
        setOverlay(true);
    }

    function closeOverlay() {
        setOverlay(false);
    }

    function taskConfirmed(){
        setOverlay(false);
        tasks.push({"Title" : "hi",
        "Desc" : "hello",
        "priority" : "high"})
    }

    return (
        <div>
            <button id="new-todo-btn" onClick={openOverlay}></button>
            {overlayIsOpen ? <Overlay onClick={closeOverlay}/> : null}
            {overlayIsOpen ? <Modal  onConfirmed={taskConfirmed}/> : null}
            {
                tasks.map((tasks)=> <TodoBox title={tasks.Title} desc={tasks.Desc} priority={tasks.priority}/>)
            }
        </div>
    )
}

export default CreateTodoButton;