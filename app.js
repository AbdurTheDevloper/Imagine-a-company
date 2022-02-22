let loginBtn = document.getElementById('login-btn');
let registerBtn = document.getElementById('register-btn');
let loginBox = document.getElementById('login-box');
let registerBox = document.getElementById('register-box');
let registerClose = document.getElementById('register-close');
let loginClose = document.getElementById('login-close');
let loginName = document.getElementById('login-name');
let loginPass = document.getElementById('login-pass');
let regName =document.getElementById('reg-name');
let regPass = document.getElementById('reg-pass');
let regSub = document.getElementById('regSub');
let loginSub = document.getElementById('loginSub');

//   submit button 
regSub.addEventListener('click', function(e){
    e.preventDefault()
    if(loginName.value == '' || loginPass.value == ''){
         alert('Something is missing, Please Provide Accured info')
    }
})
loginSub.addEventListener('click', function(e){
    e.preventDefault()
    if(regName.value == '' || regPass.value == ''){
         alert('Something is missing, Please Provide Accured info')
    }
})

// login form box
loginBtn.onclick = function(){
    loginBox.style.top= '-0px';
    registerBox.style.top = '-500px';
  
}


// register form box
registerBtn.onclick = function(){
    loginBox.style.top = '-500px';
    registerBox.style.top = '-0px';
}

loginClose.onclick = function(){
    loginBox.style.top = '-500px';
}
registerClose.onclick = function(){
    registerBox.style.top = '-500px';
}


//   menu section

let menuList = document.querySelector(".menu");
let menuIcon = document.querySelector('.menu-icon');

menuList.style.top = '-999px';

menuIcon.addEventListener('click', function(){
    if(menuList.style.top == '-999px'){
        menuList.style.top = '0px';
        menuList.style.transition = '.5s';
    }else{
        menuList.style.top = '-999px';
        menuList.style.transition = '2s';
    }
 
})