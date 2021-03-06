import React from 'react';

function header() {
    return (
    <div class='headerContainer'>
        <h1 class='headerName'>La Voz De Sandra</h1>
        <div class='btnContainer'> 
            <button class='aboutBtn'>About</button>
            <button class='bookBtn'>Book</button>
            <button class='contactBtn'>Contact</button>
            <button class='logInBtn'>Log in</button>
            <button class='signUpBtn'>Sign up</button>
        </div>
    </div>
    );
}

export default header;