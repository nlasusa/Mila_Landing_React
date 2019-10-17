import React from 'react'
import './style.css'

function Header () {
    return (
        <header>MILA
            <div id="nunc">{ `{ mee-luh }` }</div>
                <div className="topnav">
                <a href="#login" id="login">Login</a>
                <a href="contact" id="contact">Contact</a>
                <a href="#team" id="team">Team</a>
            </div>
        </header>
    )
}

// function doStuff(str) {
//     return str
// }

export default Header