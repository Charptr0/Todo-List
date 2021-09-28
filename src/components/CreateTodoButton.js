import {useState} from "react"
import Modal from "./Modal";
import Overlay from "./Overlay";

function CreateTodoButton(props)
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
            {overlayIsOpen ? <Modal  onConfirmed={closeOverlay}/> : null}
        </div>
    )
}

export default CreateTodoButton;