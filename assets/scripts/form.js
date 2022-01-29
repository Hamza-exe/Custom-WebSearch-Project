'use strict';

const form = document.getElementById('registration');
const $firstName = document.getElementById('first-name');
const $lastName = document.getElementById('last-name');
const $age = document.getElementById('age');
const $email = document.getElementById('email');
const $submit = document.getElementById('submit');
const msgSub = document.getElementById('submit-message');
const msgE = document.getElementById('msg-email');
const msgF = document.getElementById('msg-name');
const msgL = document.getElementById('msg-last');
const msgA = document.getElementById('msg-age');
const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;


submit.addEventListener('click', () => {
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let age = $age.value.trim();
    let email = $email.value.trim();
    
    let messagef = '';
    let messagel = '';
    let messagea = '';
    let messagee = '';

    let valid = true;
    let count = 0;

    if (firstName === ''){
        msgF.innerText = 'First name is required'
        valid =  false;
        count++;
    }else if (isNaN(firstName) === false){
        msgF.innerText = 'First name can not include a number'
    }

    if (lastName === ''){
        msgL.innerText = 'Last name is required'
        valid =  false;
        count++;
    }else if (isNaN(lastName) === false){
        msgL.innerText = 'Last name can not include a number'
    }

    if (age === ''){
        msgA.innerText = 'Age is required'
        count++;
    }else{
        let ageInt = parseInt(age);
        if (isNaN(age) || (ageInt < 16 || ageInt > 120)){
            msgA.innerText = 'Age is not valid'
            valid = false;
        }
    }
    
    if (email === ''){
        msgE.innerText = 'Email is required'
        valid =  false;
        count++;
    } else{
        if(!emailPattern.test(email)){
            msgE.innerText = 'Email is not valid'
            valid = false;
        }
    }
    if (count === 4){
        msgL.innerText = '';
        msgF.innerText = '';
        msgA.innerText = '';
        msgE.innerText = '';
        msgSub.innerText = 'All fields are required!';
    } else if (count === 0){
        form.reset();
        msgSub.innerText = 'Thank you!';
        msgL.innerText = '';
        msgF.innerText = '';
        msgA.innerText = '';
        msgE.innerText = '';
    }
});
