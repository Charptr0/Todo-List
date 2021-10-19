import React from "react";
import TraverseBtn from "../components/TraverseBtn";
import githubLogo from "../Images/GitHub-Mark-Light-120px-plus.png"

class About extends React.Component
{
    render(){
        return (<div id="about">
            <h1>About</h1>
            
            <p>Personal Todo List built using React</p>
            <p></p>
            
            <div>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="github-logo" width="80px"></img>
                </a>
            </div>

            <TraverseBtn txt="Home" to="/"/>

        </div>)
    }
}

export default About;