import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Task">Task</Link>
                </li>
                <li>
                    <Link to="/AboutUS">About-US</Link>
                </li>
            </ul>
        </nav>
    )
    
}