window.onload = function() {

    var name = document.getElementById("input-name");
    var lastName = document.getElementById("last-name");
    var error = document.getElementById ("message"); //name
    var errorLast = document.getElementById ("message-error-last-name");
    var dni = document.getElementById ("dni");
    var errorDni = document.getElementById("error-dni");
    var phone = document.getElementById("phone");
    var errorPhone = document.getElementById("phone-error")
    var nameCondition = "name"
    var lastNameCondition = "lastname"


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
                    return alert ("correct");
                }
            }
        }else{
            errorPhone.innerHTML = "<p id='phone-error-message'class='error'> More or less of ten </p>"
        }
    }

    phone.onfocus = function (){
        if(document.getElementById("phone-error-message")){
            console.log("hola");
            errorPhone.removeChild(document.getElementById("phone-error-message"));
        }
    }























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



































