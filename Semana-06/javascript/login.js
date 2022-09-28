window.onload = function () {
    var email = document.getElementById("email");
    var errorEmail = document.getElementById("error-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var password = document.getElementById("password");
    var errorPassword = document.getElementById ("password-error");
    var login = document.getElementById("login");

    var passwordInfo = "";
    var emailInfo = "";

    //E-MAIL//

    email.onfocus = function() {
        email.removeAttribute("placeholder")
        if(document.getElementById("email-error-id")){
            errorEmail.removeChild(document.getElementById("email-error-id"))
        }
    }

    email.onblur = function (e) {
        console.log(e);
        if(e.target.value == ""){
            errorEmail.innerHTML = "<p id = 'email-error-id' class = 'error'> Please enter your e-mail</p>"
        }
        if(!emailExpression.test(e.target.value)){
            errorEmail.innerHTML = "<p id = 'email-error-id' class = 'error'> Please enter an valid e-mail</p>"
        }else{
            email.classList.add("green-background-input");
            emailInfo = e.target.value;
        }
    }

    //PASSWORD//

    password.onfocus = function(e) {
        password.removeAttribute("placeholder")
        if(document.getElementById("password-error-id")){
            errorPassword.removeChild(document.getElementById("password-error-id"))
        }
    }
    password.onblur = function(e){
        var invalid = false;
        var passwordValue = e.target.value.trim();
        if(passwordValue == ""){
            errorPassword.innerHTML = "<p id = 'password-error-id' class = 'error'> Please enter your password </p>"
        }else{
            for(var i = 0; i < passwordValue.length; i++){
            if((((passwordValue.charCodeAt(i) >= 97) && (passwordValue.charCodeAt(i) <= 122))==false)&&(((passwordValue.charCodeAt(i) >= 48)
            &&((passwordValue.charCodeAt(i) <= 57)))==false)&&((((passwordValue.charCodeAt(i) >= 65)&&(passwordValue.charCodeAt(i) <= 90)))==false)
            ||(passwordValue.charCodeAt(i)==32)){
                invalid = true
                }
            }
            if (invalid || passwordValue.length<8){
                errorPassword.innerHTML = "<p id = 'password-error-id' class = 'error'> Password must have at least 8 characters of letters and numbers without any spaces between</p>"
            }else{
                password.classList.add("green-background-input")
                passwordInfo = e.target.value;
            }
        }
    }
    login.onclick = function (e){
        e.preventDefault();
        alert (emailInfo +" "+ passwordInfo);
    }
}