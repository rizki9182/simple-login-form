const peopleData = [
    {
        username : "rizki",
        password : "admin"
    },
    {
        username : "dude",
        password : "admin"
    }
]

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

function loginFunc(){
    const username_login = document.getElementById("usernameLogin").value;
    const password_login = document.getElementById("passwordLogin").value;
    let check_login = false;

    for(i=0;i<peopleData.length;i++){
        if(username_login == peopleData[i].username && password_login == peopleData[i].password){
            alert("Welcome "+ peopleData[i].username + " you're logged in")
            check_login = true;
        }
    }
    if(check_login==false){
        alert("Im sorry your username/password is wrong");
    }
}

function registFunc(){
    const userName_register = document.getElementById("useridRegister").value;
    const email_register = document.getElementById("emailRegister").value;
    const passWord_register = document.getElementById("passwordRegister").value;

    i = peopleData.length;
    
    peopleData[i-1].username = userName_register;
    peopleData[i-1].password = passWord_register;

    alert("Register Succesfully");
}

registerButton.addEventListener('click',registFunc);
loginButton.addEventListener('click',loginFunc);