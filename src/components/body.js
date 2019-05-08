import React from 'react';
import Rocks from '../components/media/rocks.jpg';
import Mountain from '../components/media/mountain.jpg';

function body() {
    return (
    <div>
        {/* <h2 class='universeName'>Universe</h2>
        <p class='downName'>Scroll down</p> */}

        <div class="arrow-container">
                <p><i class="down"></i></p>
        </div>

        <div class="bodyContainer">
            <p>placeholder</p>
            <div id='imgClickAndChange'>
                <p class='scrollPlaceholder'>podcast and social</p>
            </div>
            <p class='loremPlaceholder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                ipsum. Praesent fermentum ut sem nec eleifend. Quisque feugiat nec 
                orci sit amet finibus. Pellentesque et egestas nunc. Aenean rhoncus 
                massa id lectus cursus, sed tristique metus vehicula. Donec purus leo, 
                efficitur ut mauris id, dapibus facilisis ex. Sed placerat lorem nec 
                dolor venenatis, pharetra dictum quam rutrum. Aenean facilisis purus 
                ac nisl aliquet consequat. Ut porta semper neque, et pretium est laoreet
                venenatis. Praesent mollis vitae lorem et imperdiet. Nulla placerat a 
                massa non dignissim. Etiam vel elit in ligula ultrices interdum. Maecenas 
                tempor sem arcu, ac fringilla quam finibus et. Ut ut fermentum nisi.
            </p>

            <div class='podcastContainer'>

                <div class='podcastBox'>
                    <p>one</p>
                </div>

                <div class='podcastBox'>
                    <p>two</p>
                </div>

                <div class='podcastBox'>
                    <p>three</p>
                </div>

                <div class='podcastBox'>
                    <p>four</p>
                </div>

                <div class='podcastBox'>
                    <p>five</p>
                </div>

                <div class='podcastBox'>
                    <p>six</p>
                </div>

            </div>


            <div class='rockImgContainer'>
            <img src={Rocks} class='rockImg'/>
                <div class='rockDiv'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                ipsum. Praesent fermentum ut sem nec eleifend. Quisque feugiat nec 
                orci sit amet finibus. Pellentesque et egestas nunc. Aenean rhoncus 
                massa id lectus cursus, sed tristique metus vehicula. Donec purus leo, 
                efficitur ut mauris id, dapibus facilisis ex. Sed placerat lorem nec 
                dolor venenatis, pharetra dictum quam rutrum. Aenean facilisis purus 
                ac nisl aliquet consequat. Ut porta semper neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                ipsum. Praesent fermentum ut sem nec eleifend. Quisque feugiat nec 
                orci sit amet finibus. Pellentesque et egestas nunc. Aenean rhoncus 
                massa id lectus cursus, sed tristique metus vehicula. Donec purus leo, 
                efficitur ut mauris id, dapibus facilisis ex. Sed placerat lorem nec 
                dolor venenatis, pharetra dictum quam rutrum. Aenean facilisis purus 
                ac nisl aliquet consequat. Ut porta semper neque
                    </p>
                </div>
            </div>

            <div class='mountainImgContainer'>
                <img src={Mountain} class='mountainImg'/>
                <div class='mountainDiv'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                ipsum. Praesent fermentum ut sem nec eleifend. Quisque feugiat nec 
                orci sit amet finibus. Pellentesque et egestas nunc. Aenean rhoncus 
                massa id lectus cursus, sed tristique metus vehicula. Donec purus leo, 
                efficitur ut mauris id, dapibus facilisis ex. Sed placerat lorem nec 
                dolor venenatis, pharetra dictum quam rutrum. Aenean facilisis purus 
                ac nisl aliquet consequat. Ut porta semper neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum 
                bibendum nibh, ut egestas sem hendrerit a. Curabitur et mollis 
                ipsum. Praesent fermentum ut sem nec eleifend. Quisque feugiat nec 
                orci sit amet finibus. Pellentesque et egestas nunc. Aenean rhoncus 
                massa id lectus cursus, sed tristique metus vehicula. Donec purus leo, 
                efficitur ut mauris id, dapibus facilisis ex. Sed placerat lorem nec 
                dolor venenatis, pharetra dictum quam rutrum. Aenean facilisis purus 
                ac nisl aliquet consequat. Ut porta semper neque
                    </p>
                </div>
            </div>
            <p>placeholder</p>
        </div>

    </div>
    );
}

export default body;