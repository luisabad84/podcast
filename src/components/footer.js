import React from 'react';

function footer() {
    return (
    <div class='footerContainer'>

        <p>Get In Touch</p>
        <div class='emailContainer'>
            <form method="post" action="#">
            <div class="field half first">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5"></textarea>
            </div>
            {/* <ul class="actions"> */}
                <input type="submit" value="Send Message" class="alt" />
            {/* </ul> */}
            </form>
        </div>


        <div class='footerContent'>
            <div class='leftContainer'>
                <h3>La Voz De Sandra</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                    bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                    ipsum. Praesent fermentum ut sem nec eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                    bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                    ipsum. Praesent fermentum ut sem nec eleifend 
                </p>
            </div>
            
            <div class='rightContainer'>
                <button>About Me</button>
                {/* <button>Contact Me</button> */}
                <button>Book</button>
                <p>LaVozDeSandra &copy; 2019 THE URBAN COMPANY</p>
            </div>
        </div>
        <p>placeholder</p>
    </div>
    );
}

export default footer;