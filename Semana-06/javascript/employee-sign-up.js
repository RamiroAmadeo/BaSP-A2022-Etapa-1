window.onload = function() {

    var name = document.getElementById("input-name");
    var lastName = document.getElementById("last-name");
    var error = document.getElementById ("message"); //name
    var errorLast = document.getElementById ("message-error-last-name");
    var dni = document.getElementById ("dni");
    var errorDni = document.getElementById("error-dni");
    var phone = document.getElementById("phone");
    var errorPhone = document.getElementById("phone-error");
    var nameCondition = "name";
    var lastNameCondition = "lastname";
    var adress = document.getElementById("adress");
    var locality = document.getElementById("locality");
    var errorLocality = document.getElementById("error-locality");
    var postalCode = document.getElementById("postal-code");
    var postalCodeError = document.getElementById("postal-code-error")
    var email = document.getElementById("email");
    var errorEmail = document.getElementById("error-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var password = document.getElementById("password");
    var errorPassword = document.getElementById ("password-error");
    var repeatPassword = document.getElementById("password-repeat");
    var repeatPasswordError = document.getElementById("repeat-password-error");


    function threeLetters (nameValue, input, errorDiv, condition){
        for (var i=0; i < nameValue.length; i++) {
            if (((nameValue.charCodeAt(i)>= 97) && (nameValue.charCodeAt(i)<= 122))
                ||((nameValue.charCodeAt(i)>=65) && (nameValue.charCodeAt(i)<=90))){
                    input.classList.add("green-background-input");
                }else{
                    errorDiv.innerHTML = `<p id='message-error-${condition}' class='error'>Only letters</p>`
                }
        }
    }

    name.onfocus = function (e){
        if (document.getElementById(`message-error-${nameCondition}`)){
            error.removeChild(document.getElementById(`message-error-${nameCondition}`));
        }
        if (document.getElementById("message-error")){
            error.removeChild(document.getElementById("message-error"))
        }
        name.classList.remove("green-background-input");
    }

    name.onblur = function(e){
        var nameValue = e.target.value;
        if(nameValue == ""){
            error.innerHTML = "<p id='message-error' class='error'>Please complete the field</p>";
            return false;
        }else if(nameValue.length<3){
            error.innerHTML = "<p id='message-error' class='error'>Minimum of three letters</p>";
        }else{
        threeLetters(nameValue, name, error, nameCondition);
        }
    }
        lastName.onfocus = function (e){
            if (document.getElementById(`message-error-last-${lastNameCondition}`)){
                errorLast.removeChild(document.getElementById(`message-error-last-${lastNameCondition}`));
            }if (document.getElementById("message-error-last")){
                errorLast.removeChild(document.getElementById("message-error-last"))
            }
            lastName.classList.remove("green-background-input");
        }

        lastName.onblur = function(e){
        var lastNameValue = e.target.value;

        if(lastNameValue == ""){
            errorLast.innerHTML = "<p id='message-error-last' class='error'>Please complete the field</p>";
        }else if (lastNameValue.length<3){
            errorLast.innerHTML = "<p id='message-error-last' class='error'>Minimum of three letters</p>";
        }else{
            threeLetters (lastNameValue, lastName,errorLast, lastNameCondition);
        }
    }

    //DNI

    dni.onblur = function (e){
    var dniValue = e.target.value;
        if(dniValue.length>=7){
            for(i=0; i < dniValue.length; i++){
                if ((dniValue.charCodeAt(i)>=48) && (dniValue.charCodeAt(i)<=57)||(dniValue.charCodeAt(i)==32)){
                    return dni.classList.add("green-background-input");
                }else{
                    errorDni.innerHTML = "<p id= 'error-dni-message' class='error'>Only numbers</p>"
                    break
                }
            }
        }else{
            errorDni.innerHTML = "<p id= 'error-dni-message' class='error'>Seven numbers minimun</p> "
        }
        if(dniValue == ""){
            errorDni.innerHTML = "<p id='error-dni-message' class='error'>Please complete the field </p>";
        }
    }

    dni.onfocus = function (){
        if (document.getElementById('error-dni-message')){
            errorDni.removeChild(document.getElementById('error-dni-message'));
        }
        dni.classList.remove("green-background-input");
    }

    //PHONE

    phone.onblur = function (e){
        var phoneValue = e.target.value;
        if (phoneValue.length == 10){
            for (i=0; i < phoneValue; i++){
                if ((phoneValue.charCodeAt(i)>=48) && (phoneValue.charCodeAt(i)<=57)){
                    return phone.classList.add("green-background-input");
                }
            }
        }else{
            errorPhone.innerHTML = "<p id='phone-error-message'class='error'> Only ten numbers </p>"
        }
        if (phoneValue == ""){
            errorPhone.innerHTML = "<p id='phone-error-message'class='error'> Please complete the field</p>"
        }
    }

    phone.onfocus = function (){
        if(document.getElementById("phone-error-message")){
            errorPhone.removeChild(document.getElementById("phone-error-message"));
        }
        phone.classList.remove("green-background-input");
    }

    //ADRESS

    adress.onblur = function (e){
        adressValue = e.target.value;
        if(adressValue.length >= 5){
            for (var i=0; i < adressValue.length; i++) {
                /* if((((adressValue.charCodeAt(i) >= 97) && (adressValue.charCodeAt(i) <= 122))==false)&&(((adressValue.charCodeAt(i) >= 48)
                &&((adressValue.charCodeAt(i) <= 57)))==false)&&((((adressValue.charCodeAt(i) >= 65)&&(adressValue.charCodeAt(i) <= 90)))==false)
                &&(adressValue.charCodeAt(i)==32)==false){
                    console.log("hola")
                }else{
                    console.log("hola2")
                } */
                if ((((adressValue.charCodeAt(i)>=48) && (adressValue.charCodeAt(i)<=57))
                && ((adressValue.charCodeAt(i)>=65) && (adressValue.charCodeAt(i)<=90))
                && ((adressValue.charCodeAt(i)>=97) && (adressValue.charCodeAt(i)<=122)))
                && (adressValue.charCodeAt(i)==32)){
                    console.log("hola")
                    return adress.classList.add("green-background-input");
                }else{
                    console.log("hola2");
                }
            }
        }
    }

    //LOCALITY

    locality.onblur = function (e){
        localityValue = e.target.value;
        var letterMinusq = false
        var numbers = false
        var letterMayusq = false

        if (localityValue.length > 3){
            for (i=0; i < localityValue.length; i++){
                if((localityValue.charCodeAt(i) >= 97) && (localityValue.charCodeAt(i) <= 122)){
                    letterMinusq = true;
                }else if((localityValue.charCodeAt(i)>=48) && (localityValue.charCodeAt(i)<=57)){
                    numbers = true;
                }else if ((localityValue.charCodeAt(i)>=65) && (localityValue.charCodeAt(i)<=90)){
                    letterMayusq = true;
                }
            }
            if(letterMinusq==false || numbers==false || letterMayusq==false){
                errorLocality.innerHTML = "<p id= 'locality-error-message' class= 'error'>Error</p>"
            }
            if (letterMinusq==true && numbers==true && letterMayusq==true){
                locality.classList.add("green-background-input")
            }
        }else if (localityValue.length == ""){
            errorLocality.innerHTML = "<p id= 'locality-error-message' class= 'error'>Please complete the field</p>"
        }else{
            errorLocality.innerHTML = "<p id= 'locality-error-message' class= 'error'>Please more of characters</p>"
        }
    }
    locality.onfocus = function (){
        if(document.getElementById("locality-error-message")){
            errorLocality.removeChild(document.getElementById("locality-error-message"));
        }
        locality.classList.remove("green-background-input");
    }

    //POSTAL CODE
    postalCode.onfocus = function (){
        if(document.getElementById("postal-message-error")){
            postalCodeError.removeChild(document.getElementById("postal-message-error"));
        }
        postalCode.classList.remove("green-background-input");
    }

    postalCode.onblur = function (e){
        var postalCodeValue = e.target.value;
        if ((postalCodeValue.length>=4) && (postalCodeValue.length<=5)){
            for (i=0; i < postalCodeValue.length; i++){
                if  ((postalCodeValue.charCodeAt(i)>=48) && (postalCodeValue.charCodeAt(i)<=57)){
                        postalCode.classList.add("green-background-input")
                }else{
                    postalCodeError.innerHTML = "<p id='postal-message-error' class='error'>Only numbers</p>"
                }
            }
        }else if (postalCodeValue.length == ""){
            postalCodeError.innerHTML = "<p id='postal-message-error' class='error'>Please complete the field</p>"
        }else{
            postalCodeError.innerHTML = "<p id='postal-message-error' class='error'>Only four or five numbers</p>"
        }
    }

    // EMAIL

    email.onfocus = function() {
        email.removeAttribute("placeholder")
        if(document.getElementById("email-error-id")){
            errorEmail.removeChild(document.getElementById("email-error-id"))
        }
    }

    email.onblur = function (e) {
        if(e.target.value == ""){
            errorEmail.innerHTML = "<p id='email-error-id' class='error'> Please enter your e-mail</p>"
        }
        if(!emailExpression.test(e.target.value)){
            errorEmail.innerHTML = "<p id = 'email-error-id' class = 'error'> Please enter an valid e-mail</p>"
        }else{
            email.classList.add("green-background-input");
        }
    }

    //PASSWORD

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
            errorPassword.innerHTML = "<p id = 'password-error-id' class = 'error'> Please enter your password</p>"
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
            }
        }
    }

    //REPEAT PASSWORD

    repeatPassword.onfocus = function(e) {
        repeatPassword.removeAttribute("placeholder")
        if(document.getElementById("repeat-password-error-id")){
            repeatPasswordError.removeChild(document.getElementById("repeat-password-error-id"))
        }
    }

    repeatPassword.onblur = function(e){
        var invalid = false;
        var repeatPasswordValue = e.target.value.trim();
        if(repeatPasswordValue == ""){
            repeatPasswordError.innerHTML = "<p id = 'repeat-password-error-id' class = 'error'> Please enter your password</p>"
        }else{
            for(var i = 0; i < repeatPasswordValue.length; i++){
            if((((repeatPasswordValue.charCodeAt(i) >= 97) && (repeatPasswordValue.charCodeAt(i) <= 122))==false)&&(((repeatPasswordValue.charCodeAt(i) >= 48)
            &&((repeatPasswordValue.charCodeAt(i) <= 57)))==false)&&((((repeatPasswordValue.charCodeAt(i) >= 65)&&(repeatPasswordValue.charCodeAt(i) <= 90)))==false)
            ||(repeatPasswordValue.charCodeAt(i)==32)){
                invalid = true
            }
        }
        if (invalid || repeatPasswordValue.length<8){
            repeatPasswordError.innerHTML = "<p id = 'repeat-password-error-id' class = 'error'> Password must have at least 8 characters of letters and numbers without any spaces between</p>"
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* locality.onblur = function (e){
        localityValue = e.target.value;
        if(localityValue == ""){
            errorLocality.innerHTML = "<p id='error-locality' class='error'>Please complete the field</p>";
            return false;
        }else if(localityValue.length<3){
            errorLocality.innerHTML = "<p id='error-locality' class='error'>Minimum of three letters</p>";
        }else{
            for (i=0; i < localityValue.length; i++){
                if (((localityValue.charCodeAt(i)>=48) && (localityValue.charCodeAt(i)<=57))
                && ((localityValue.charCodeAt(i)>=97) && (localityValue.charCodeAt(i)<=122))) {
                        return console.log("buenas");
                    }
            }
        } */
        /* if(localityValue.length > 3){
            for (i=0; i < localityValue.length; i++){
                if (((localityValue.charCodeAt(i)>=48) && (localityValue.charCodeAt(i)<=57))
                    && ((localityValue.charCodeAt(i)>=65) && (localityValue.charCodeAt(i)<=90))
                    && ((localityValue.charCodeAt(i)>=97) && (localityValue.charCodeAt(i)<=122))){
                        return console.log("bunas");
                    }
            }
        } */























  /*   function threeLetters(inputValue){
        if(inputValue.length >= 3){
            for (var i=0; i < inputValue.length; i++){
                if ((inputValue.charCodeAt(i)>= 97) && (inputValue.charCodeAt(i)>=122)){
                    invalid = true;
                }else{
                    invalid = false;
                }
            }
        }
    } */














}



































