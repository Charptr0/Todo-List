import {useState} from "react"
import CreateTaskModal from "./CreateTaskModal";
import Overlay from "./Overlay";
import Todo from "./Todo"

let tasks = [];

function Main()
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
        tasks.push({"title" : "hi",
        "desc" : "hello",
        "priority" : "high"})
    }

    function onDelete(data)
    {
        tasks = data;
    }

    return (
        <div>
            <button id="new-todo-btn" onClick={openOverlay}></button>
            {overlayIsOpen ? <Overlay onClick={closeOverlay}/> : null}
            {overlayIsOpen ? <CreateTaskModal  onConfirmed={taskConfirmed}/> : null}
            <br></br>

            <Todo  data={tasks} onDelete={onDelete}/>

        </div>
    )
}

export default Main;