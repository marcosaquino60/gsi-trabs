var loginForm = document.querySelector(".loginForm");
var emailAlert = document.getElementById("emailError");
var passwordAlert = document.getElementById("passwordError");

loginForm.addEventListener('submit', (event) => {
    
    //apagando mensagem de alerta caso esteja tudo certo
    emailAlert.textContent = "";
    passwordAlert.textContent = "";

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(email.value.trim() === "") {
        email.style.border = "1px solid #f00";
        emailAlert.style.display = "block";
        emailAlert.textContent = "O campo E-mail deve ser preenchido";
        event.preventDefault();
    }
    if(password.value.trim() === "") {
        password.style.border  = "1px solid #f00";
        passwordAlert.style.display = "block";
        passwordAlert.textContent = "O campo Senha deve ser preenchido";
        event.preventDefault();
    }
});