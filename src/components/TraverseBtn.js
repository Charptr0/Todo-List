import { Link } from "react-router-dom";

function TraverseBtn(props)
{   
    return (
        <div>
            <Link to={props.to}>
                <button id="about-btn"><strong>{props.txt}</strong></button>
            </Link>
        </div>
    )
}

export default TraverseBtn;