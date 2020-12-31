const button = document.querySelector("#btn");
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const loginToggle = document.querySelector("#toggle-login");
const registerToggle = document.querySelector("#toggle-register")

loginToggle.addEventListener('click', function() {
    button.style.left = "0px";
    login.style.left = "50px";
    register.style.left = "450px";
});

registerToggle.addEventListener('click', function() {
    button.style.left = "110px";
    login.style.left = "-400px";
    register.style.left = "50px";
});
