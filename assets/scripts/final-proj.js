'use strict';

const google = document.getElementById('google');
const bing = document.getElementById('bing');
const search = document.getElementById('url');
const popup = document.getElementById('popup');
const loginButton = document.getElementById('login-button');
const pwd = document.getElementById('password');
const usr = document.getElementById('username');
const submit = document.getElementById('submit');
const pMessage = document.getElementById('inform');
const popupmsg = document.getElementById('message');
let login = false;

document.addEventListener('keydown', (event) => {
    if(event.key == 'Escape'){
        popup.style.display = "none";
    }
});

google.addEventListener('click', function() {
    const message = search.value.replace('', '+')
    if (message.length > 1){
        location.replace("https://www.google.com/search?q=" + message);
        console.log('works g')
        pMessage.innerText = '';
    }else{
        pMessage.innerText = 'Search bar cannot be empty!';
    }
});

bing.addEventListener('click', function() {
    const message = search.value.replace('', '+')
    console.log(message.length)
    if (message.length > 1){
        location.replace("https://www.bing.com/search?q=" + message);
        console.log('works b')
        pMessage.innerText = '';
    }else{
        pMessage.innerText = 'Search bar cannot be empty!';
    }
});


loginButton.addEventListener('click', function() {
    popup.classList.add('visible');
});

submit.addEventListener('click', function() {
    const username1 = usr.value.trim();
    const password1 = pwd.value.trim();
    const username = 'hamzaelafifi';
    const password = 'hamza123';

    if (username1 === username && password1 === password){
        popup.classList.remove('visible')
        login = true;
        if (login === true){
            google.style.backgroundColor = "rgb(96, 61, 68)";
            bing.style.backgroundColor = "rgb(64, 68, 100)";
            google.disabled = false;
            bing.disabled = false;
            console.log('login is true')
            google.style.cursor = "pointer"
            bing.style.cursor = "pointer"
            popupmsg.innerText = '';
        }
    }else{
        popupmsg.innerText = 'Password or Username is incorrect!';
    }
});