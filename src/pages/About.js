import React from "react";
import TraverseBtn from "../components/TraverseBtn";
import githubLogo from "../Images/GitHub-Mark-Light-120px-plus.png"

class About extends React.Component
{
    render(){
        return (<div id="about">
            <h1>About</h1>
            
            <div>
                <p>A simple todo list built using React</p>
                <p>Created by: @Charptr0</p>
                <div>
                <a href="https://github.com/Charptr0/Todo-List" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="github-logo" width="80px"></img>
                </a>
            </div>
            </div>
            <div>
                <h2>Instructions</h2>
                <ul>
                    <li>1. To create a task, click the button right below "Personal Todo List"</li>
                    <li>2. Give the task a name, description and a priority level</li>
                    <li>3. After clicking the confirm button, the task will be created</li>
                    <li>4. By clicking the "delete" button, the task will disappear</li>
                    <br></br>
                    <li>NOTE: All task are stored in local storage</li>
                </ul>
            </div>
            
            <TraverseBtn txt="Home" to="/"/>
        </div>)
    }
}

export default About;