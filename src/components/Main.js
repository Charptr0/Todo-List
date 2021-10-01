import {useState} from "react"
import CreateTaskModal from "./CreateTaskModal";
import Overlay from "./Overlay";
import TodoBox from "./TodoBox";
import TodoList from "./TodoList";

function Main(props)
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
        props.data.push({"title" : "hi",
        "desc" : "hello",
        "priority" : "high"})
    }

    return (
        <div>
            <button id="new-todo-btn" onClick={openOverlay}></button>
            {overlayIsOpen ? <Overlay onClick={closeOverlay}/> : null}
            {overlayIsOpen ? <CreateTaskModal  onConfirmed={taskConfirmed}/> : null}
            <br></br>
            
            <TodoList data={props.data}/>
        </div>
    )
}

export default Main;