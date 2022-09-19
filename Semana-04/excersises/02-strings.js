console.log('--Ejercicio 2: Strings');
/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir
todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('-Ejercicio 2.a');

var stringA = 'Hello, this is for practice purpose';
var resultA = stringA.toUpperCase();

console.log(resultA);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Ejercicio 2.b');

var resultB = stringA.substring(0,5);

console.log(resultB);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Ejercicio 2.c')

var resultC = stringA.substring(stringA.length-3);

console.log(resultC);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado
en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Ejercicio 2.d')

var stringWord = 'tHIS IS ALSO FOR PRACTICE PURPOSE';
var resultD = stringWord.substring(0,1).toUpperCase()+stringWord.substring(1).toLowerCase();

console.log(resultD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Ejercicio 2.e')

var resultE = stringA.indexOf(' ');

console.log(resultE);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Ejercicio 2.f')

var wordOne = 'aSYNCHromATIc aBSTENtioUS';
var resultF = wordOne.substring(0,1).toUpperCase()+wordOne.substring(1,wordOne.indexOf(' ')).toLowerCase()+
wordOne.substring(wordOne.indexOf(' '),wordOne.indexOf('BSTENtioUS')).toUpperCase()+
wordOne.substring(wordOne.indexOf('BSTENtioUS')).toLowerCase();

console.log(resultF);