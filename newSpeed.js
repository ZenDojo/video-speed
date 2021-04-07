// ==UserScript==
// @name         Speedy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add video speed
// @author       ZenDojo
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    let funcDone = false
    function addSpeeds() {
        if (funcDone) return;
        let speedDiv = document.createElement('div')
        for (let i = 1; i <= 4; i += 1) {
            let btn = document.createElement('button');
            btn.style.backgroundColor = '#008CBA';
            btn.style.marginRight = '4px';
            btn.style.border = '1px solid #D3D3D3';
            btn.style.borderRadius = '2px';
            btn.style.width = '60px';
            btn.style.height = '40px';
            btn.style.borderRadius = '2px';
            btn.style.color = '#ffffff';
            btn.style.fontSize = '14px';
            btn.style.borderRadius = '3px';
            btn.style.cursor = 'pointer';
            btn.innerHTML = '×' + i;
            btn.addEventListener('click', () => document.querySelector('video').playbackRate = i)
            speedDiv.appendChild(btn)
        }
        speedDiv.style.position = 'fixed'
        speedDiv.style.bottom = '50px'
        speedDiv.style.right = '50px'
        document.querySelector('body').appendChild(speedDiv);
        funcDone = true
    }
    addSpeeds();
})();