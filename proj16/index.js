let nameError = document.getElementById('name-e');
let phoneError = document.getElementById('phone-e');
let emailError = document.getElementById('email-e');
let msgError = document.getElementById('msg-e');
let submitError = document.getElementById('submit-e');

// check all the regex's once more
function validateName(){
    let name=document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write Full Name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-check"></i>'
    return true;
}

function validatePhone(){
    let phone=document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits req';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-check"></i>'
    return true;
}

function validateEmail(){
    let email=document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-check"></i>'
    return true;
}

function validateMsg(){
    let msg=document.getElementById('msg').value;
    let required = 30;
    var left = required - msg.length;
    if(left > 0){
        msgError.innerHTML = left + 'more characters required';
        return false
    }
    msgError.innerHTML='<i class="fa-solid fa-check"></i>'
    return true;
}

function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMsg()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fill out all fields';
        setTimeout(() => {
             submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}