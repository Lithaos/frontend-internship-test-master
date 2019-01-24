var enter = document.getElementById('show-popup-form');
var form = document.getElementById("popup-form");
enter.onclick = function () {
    form.setAttribute("class", "popup");
    enter.setAttribute('class', "invisible");
};
document.getElementById('exit').onclick = function () {
    form.setAttribute("class", "invisible");
    enter.innerHTML = "Click me!";
    enter.setAttribute('class', "btn btn-main");
    emailError.setAttribute("class", "invisible");
    passwordError.setAttribute("class", "invisible");
};

var validate = function () {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    console.log(document.getElementById("terms").value);
    if (reg.test(email.value) && password.value.length >= 5) {

        emailError.setAttribute("class", "invisible");
        passwordError.setAttribute("class", "invisible");
        return true;
    }
    else {
        if (!reg.test(email.value)) {
            emailError.setAttribute("class", "error");
            emailError.innerText = "Błędny Email!";
        }
        else {
            emailError.setAttribute("class", "invisible");
        }
        if (password.value.length <= 5) {
            passwordError.setAttribute("class", "error");
            passwordError.innerText = "Hasło musi miec 5 znaków";
        }
        else {
            passwordError.setAttribute("class", "invisible");
        }
    }
};

document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();
    if (validate()) {
        email.setCustomValidity('Powinieneś napisać TEST!');
        setTimeout(function () {
            form.setAttribute("class", "invisible");
            enter.innerHTML = "Thank you!";
            enter.setAttribute('class', "btn btn-main");
            document.getElementById('show-popup-form').id = "done";
        }, 3000);
    }


});