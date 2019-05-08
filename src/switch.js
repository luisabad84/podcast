import React from 'react';
import {Podcast} from '..components/media/podcast.jpg';
import {Social} from '../components/media/social.jpg';

var imgs = [{Podcast}, {Social}];

function changeImage(dir) {
    var img = document.getElementById("imgClickAndChange");
    img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
}

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        changeImage(-1) //left <- show Prev image
    } else if (e.keyCode == '39') {
        // right -> show next image
        changeImage()
    }
}



