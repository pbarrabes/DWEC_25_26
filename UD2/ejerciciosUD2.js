/* Ejercicio 1 :Declara 6 variables a las que asignaremos los siguientes valores. 1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57. 
Una vez creadas muestra por consola los valores almacenados y el tipo de dato que nos indica el operador typeof. */
/* let numero1= 1357;
let numero2= 135.7;
let numero3= 135e7;
let numero4= 0b1010;
let numero5=0o1357;
let numero6=0x1A57;

console.log("numero 1:"+ numero1+ "tipo:" +typeof numero1);
console.log("numero 2:"+ numero2+ "tipo:" +typeof numero2);
console.log("numero 3:"+ numero3+ "tipo:" +typeof numero3);
console.log("numero 4:"+ numero4+ "tipo:" +typeof numero4);
console.log("numero 5:"+ numero5+ "tipo:" +typeof numero5);
console.log("numero 6:"+ numero6+ "tipo:" +typeof numero6);  */

/* Ejercicio 2 Pide al usuario un  número utilizando el método prompt(), guarda ese dato en una variable. 
OJO guardarlo de manera que sea un tipo  Number no un String. 
Compruébalo mostrando por consola el tipo de dato guardado  con el operador typeof. */

/* NOTA Investigar diferencia entre parseInt y usar el constructor de Number */

/* let numero= parseInt(prompt("Dime un numero"));
console.log(`El tipo de dato de ${parseInt(numero)} con parseInt es :${typeof parseInt(numero)}`);
console.log(`El tipo de dato de ${Number(numero)} con Number es :${typeof Number(numero)}`);

let numeroDeverdad=parseInt(numero); */

/*  Ejercicio 3 Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. 
Almacena cada dato en una variable diferente.  A continuación muestra la siguiente información.
Por consola una frase que incluya su nombre , apellidos y la edad.
En el documento html incluye con formato h3 la misma información.
En un alert muestra la siguiente información “Dentro de numero años tendras x años”. 
Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio */

/* let nombre=prompt("Dime tu nombre");
let apellidos=prompt("Dime tus apellidos");
let edad=prompt("Dime tu edad");
let numeroEj3=prompt("Dime un numero del 1 al 10")

console.log(`Te llamas ${nombre.toLowerCase()} ${apellidos} y tu edad es ${edad}`);
alert(`${nombre} dentro de ${numeroEj3} tendras ${parseInt(edad)+parseInt(numeroEj3)}`);
document.write(`<h3>Te llamas ${nombre} ${apellidos} y tu edad es ${edad}</h3>`);
document.body.innerHTML+="`<h3>Te llamas ${nombre.toLowerCase()} ${apellidos} y tu edad es ${edad}</h3>`"; */


/*  Ejercicio 4 Pide al usuario un string, Muestra en el documento la posicion que ocupa la primera “a” */

/* let stringA=prompt("Dime una frase en la que encontrar la primera 'a'");
document.write(`<h3> LA primera a esta en la posicion ${stringA.indexOf("a")}</h3>`) */

/* Ejercicio 5: Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del segundo string. 
ejemplo
string 1 “Hola caracola”
string 2 “cara”
string 3 “era”
resultado a mostrar con un alert “Hola eracola”. */

/* let string1=prompt("Dime un primer string");
let string2=prompt("Dime un segundo string");
let string3=prompt("Dime un tercer string");

/* alert(string1.replace(string2,string3)); */

/* let nuevostring=string1.replace(string2,string3);
alert(string1.replace(string2,string3))
console.log(string1);
console.log(nuevostring); */

/* Ejercicio 6 */

/* let string1=prompt("Dime un primer string");
let string2=prompt("Dime un segundo string");
let string3=prompt("Dime un tercer string");

alert(string1.replaceAll(string2,string3)); */

/* Ejercicio 7 Pide dos strings al usuario. Debes mostrar el número de veces que el segundo string está incluido en el primero. 

/* NOTA  Este ejercicio seguramento lo habreis hecho con indexOf buscando la posicion de la primera ocurrencia. Luego en bucle seguimos usando indexOf a partir de la posición encontrada y acumulando .

Como alternativa mas compacta pero con cosas mas avanzadas os pongo esta otra solucion. Analizarla y si no entendeis algo,  preguntar*/

/* let string1=prompt("Dime un primer string");
let string2=prompt("Dime un segundo string")

console.log([...string1.matchAll(string2)].length); */


/* Ejercidios del 8 al 11 ver javascript.info*/

/* Ejercicio 12 Usa el operador “?” para escribir un código que nos pida un número y nos muestre un mensaje si es mayor o igual que cero 
y otro mensaje si es menor estricto que cero. */

let numero = prompt("Die un numero entero");
(numero>=0)?alert("El numero es positivo o cero"):alert("el numero es negativo");


