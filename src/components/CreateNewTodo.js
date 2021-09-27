import {useState} from "react"
import Overlay from "./Overlay";

function CreateNewTodo(props)
{
    const [overlayIsOpen, setOverlay] = useState(false);

    function openOverlay() {
        setOverlay(true);
    }

    function closeOverlay() {
        setOverlay(false);
    }

    return (
        <div>
            <button id="new-todo-btn" onClick={openOverlay}></button>
            {overlayIsOpen ? <Overlay onClick={closeOverlay}/> : null}
        </div>
    )
}

export default CreateNewTodo;