console.log('--Ejercicio 6: Funciones');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Ejercicio 6.a');

function suma(firstNumber, secondNumber){
    return firstNumber + secondNumber
}
var result = suma (5, 8)

console.log(result)

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/

console.log('-Ejercicio 6.b');

function sumaTwo(firstNumber, secondNumber){
    if ((typeof (firstNumber) == 'number') && (typeof (secondNumber) == 'number')){
        return firstNumber + secondNumber
    }else{
        alert('invalid parameters')
        return NaN
    }
}
resultSixB = sumaTwo(10, 'amazing');

console.log(resultSixB);

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero
si es un número entero.*/

console.log('-Ejercicio 6.c');

function validateInteger (number){
    return Number.isInteger(number);
}
number = 10;
console.log(validateInteger(number));

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide
que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número
convertido a entero (redondeado).*/

console.log('-Ejercicio 6.d');

function plus(firstVal, secondVal){
    if ((typeof (firstVal) == 'number') && (typeof (secondVal) == 'number')){
        if (!validateInteger(firstVal) || !validateInteger(secondVal)){
            alert ('Error: Decimal number');
            return Math.round(firstVal + secondVal);
        }else{
           return firstVal+secondVal;
        }
    }else{
        alert ('Error: Not a number')
        return NaN
    }
}
firstVal = 50;
secondVal = 33.33;
resultSixD = plus(firstVal, secondVal);

console.log (resultSixD);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
suma probando que todo siga funcionando igual.*/

console.log('-Ejercicio 6.e');

function pepe(firstVal, secondVal){
    if ((typeof (firstVal) == 'number') && (typeof (secondVal) == 'number')){
        return validatePlus(firstVal,secondVal)
    }else{
        alert ('Error: Not a number')
        return NaN
    }
}

function validatePlus (firstNum, secondNum){
    if (!validateInteger(firstNum) || !validateInteger(secondNum)){
        alert ('Error: Decimal number');
        return Math.round(firstNum + secondNum);
    }else{
       return firstNum+secondNum;
    }
}

console.log(pepe(firstVal, secondVal));