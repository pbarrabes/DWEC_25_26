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

/* let numero = prompt("Die un numero entero");
(numero>=0)?alert("El numero es positivo o cero"):alert("el numero es negativo");
 */

/* Ejercicio 13 y 14 Crea un programa  utilizando la sentencia if else  que pida al usuario que introduzca una edad y muestre el siguiente mensaje en función del número introducido:
0-12: Niño
13-26: Joven
27-65: Adulto
>65: Jubilado
 */
/* 
let edad;
do {
    console.log(edad);
} while (!(edad=parseInt(prompt("Dime tu edad"))));


    if(edad>=0&&edad<=12) {
        alert("Eres un Niño");
    } else if(edad<=26) {
        alert("Eres un Joven");
    } else if(edad <=65){
        alert("Eres un adulto");
    } else{
        alert("Eres un jubilado")
}; */

/*  15 Construye un programa que pida   un número del 1 al 10 al usuario, luego muestra por pantalla la tabla de multiplicar de ese número hasta 10. 
    Para ello muestra en líneas diferentes el siguiente mensaje: “ 8 por 1 = 8” y así sucesivamente. Suponiendo que el usuario hubiera introducido un 8.

 */

/* 
    let numero= parseInt(prompt("Dime un numero"));
    for (let i = 0; i <= 10;i++){
        document.write(`<p>${numero} por ${i} = ${numero * i}</p>`);
    } 
 */
        /* 16 y 17 Crea un programa que sea un “pequeño traductor” de nombres de frutas. 
A partir de una lista de 5 Frutas en español (“Pera”, “Manzana”,”Piña”,”Fresa”,”Naranja”) 
el programa pedirá al usuario el nombre de una fruta, en el caso de que corresponda al listado le mostrará en un cuadro de diálogo la traducción al Inglés. 
En el caso de otro texto mostrará “Fruta desconocida”. Para este ejercicio debes usar una estructura switch.

Comenta el código con los comentarios que estimes necesarios.
 */

 
// Esta solucion muestra como incluir varis casos al no poner el break en cada case.
// Otras opciones para el 17 pasarian por pasar fruta a minusculas. En la linea de abajo se muestra con el metodo que tiene en cuenta la localizacion. 
//let fruta = prompt("Dime un nombre de fruta").toLowerCase() ; 
/* let fruta=prompt("Dime un nombre de fruta");

switch (fruta) {
    case "Pera":
    case "pera":// Lo incluyo tambien para la primera en minuscula
        alert(`${fruta} en ingles se dice Pear`);    
        break;
    case "Manzana":
    case "manzana":
        alert(`${fruta} en ingles se dice Apple`);    
        
        break;

    default:
        alert(`No se como se dice ${fruta} en ingles`);
        break;
}  */

/* 20 Escribe tres funciones suma que acepte un número indeterminado de argumentos y devuelva la suma de todos ellos. 
Debes evitar que la función devuelva “undefined” si no se le pasa ningún argumento, en cuyo caso el valor que devuelva tiene que ser 0. 
Debes escribir cada versión de la función  de las tres formas que hemos visto.
suma1 , declaración tradicional de una función
suma2, función como expresión.
suma3, función flecha. */

/* function suma(a=0,...resto){
    let suma=parseInt(a);
    for (const dato of resto) {//Por ejemplo con for of. Hay muchas maneras de hacerlo.
        suma+=parseInt(dato);
    }
    return isNaN(suma)?"Error":suma;
}

let suma2= function(a=0,...resto){
        let suma=parseInt(a);
    for (const dato of resto) {//Por ejemplo con for of. Hay muchas maneras de hacerlo.
        suma+=parseInt(dato);
    }
    return isNaN(suma)?"Error":suma;
}

let suma3= (a=0,...resto)=>{
        let suma=parseInt(a);
    for (const dato of resto) {//Por ejemplo con for of. Hay muchas maneras de hacerlo.
        suma+=parseInt(dato);
    }
    return isNaN(suma)?"Error":suma;
}
console.log(suma());
console.log(suma(2,5,7,9));
console.log(suma("2",3));
console.log(suma("er ",2)); */

 /*21 Escribe una función denominada “operacionesEncadenadas” con los siguientes argumentos
Dos valores que actuarán de datos para las operaciones.
El tercero y cuarto dos funciones callback que definiremos aparte. La primera devolverá la suma de los dos datos. La segunda el producto
El último argumento será una función callback que pasaremos en la llamada a la función  como función flecha con un mensaje por pantalla al usuario */

/* let a =parseInt(prompt("Damee un numero"));
let b =parseInt(prompt("Damee otro numero"));

let operacionesEncadenadas= function(x,y,operacion1,operacion2,final){

    document.write(operacion1(x,y));
    document.write(operacion2(x,y));
    final();
}

function suma(op1,op2){
    return op1+op2;
}

let producto= (x=1,y)=> x*y;

operacionesEncadenadas(a,b,suma,producto,()=>alert("Hasta luego")); */

/* 22 Crea una función que sume todos los elementos de un array numérico.(Sin recorrer el Array) */
/* 
function sumaArray(array){
    return array.reduce((suma,valorActual)=> suma+valorActual)
}

document.write(sumaArray([1,2,3]));

/* 23 Encuentra y muestra todos los números pares de un array. (Sin recorrer el Array)*/

/* const array=[2,5,7,3,4,6,44,67];
let buscarPares=(acumulador,numeroActual)=>{
    numeroActual%2==0?document.write(`${numeroActual}<br>`):"";
}
let numPares=array.reduce(buscarPares);    */


// otra opcion mas limpia
//document.write(`${array.filter((numero)=>numero%2==0)}`);// document.write muestra el array con sus elementos separados por ,
// Debajo lo mismo pero menos compacto.

/*  24 Encuentra la palabra más larga en un array de palabras. */
/* 
const palabras=["hola","perro","caracola","jes"]; */
//Ahora si otra vez abusando del reduce

/* let palabraMaslarga=palabras.reduce(
    (masLarga,palabraActual)=>palabraActual.length>=masLarga.length? palabraActual: masLarga);
document.write(palabraMaslarga); */

/* 25  Elimina los elementos duplicados de un array. (Usa la estructura Set como ayuda)*/

/* const array=["perro","gato","caballo","perro","caballo"];
const arrayAset= new Set(array);
const arraySinDuplicados= Array.from(arrayAset);
console.log(arraySinDuplicados); */

/* 26 Usando el siguiente array que contiene una lista de nombres de países vamos a crear una serie de funciones para realizar diferentes operaciones sobre ese array. 
const paises = ["México", "Japón", "Italia", "Australia", "Brasil", "Canadá", "Francia", "Alemania", "India", "Argentina", "España", "China", "Sudáfrica", "Rusia", "Corea del Sur", "Reino Unido", "Estados Unidos", "Indonesia", "Egipto", "Turquía"];
Función mostrarArray. Nos muestra en el documento HTML el número de elementos del array y a continuación el contenido del array en una lista numerada (ol)
Función mostrarArrayAlreves. Igual que la anterior pero antes de mostrarlo lo ordena en sentido inverso. El array queda modificado.
Función añadirElemento. Nos debe pedir un elemento y preguntarnos si lo queremos añadir al principio, al final o en una posición concreta. Después lo añadimos en dicha posición y lo mostramos con la función mostrarArray.
Función eliminarElementoPosicion. La función debe dar la opción de eliminar al principio, al final o en una posición dada por el usuario. Después mostramos el array modificado con la función mostrarArray
Función buscarPais. La función nos devuelve la posición de una país, o -1 si no lo encuentra.
Función añadirPais. La función nos comprueba si un país que nos pasa el usuario existe y en caso de que no exista lo inserta al final. Si existe lo indica con un mensaje indicando la posición. La función devuelve la posición en la que está el país, o la posición en la que lo ha insertado.
Función eliminar Pais. La función elimina un país que le pasamos como parámetro. Nos indica la posición en la que lo ha encontrado y borrado. La función devuelve la posición o -1 si no lo ha podido borrar. El array no debe quedar con espacios vacíos tras la eliminación*/

/* const paises = ["México", "Japón", "Italia", "Australia", "Brasil", "Canadá", "Francia", "Alemania", "India", "Argentina", "España", "China", "Sudáfrica", "Rusia", "Corea del Sur", "Reino Unido", "Estados Unidos", "Indonesia", "Egipto", "Turquía"];
function mostrarArray(array){

    document.write(`<p>El array  tiene ${array.length} elementos</p><ol>`);
    array.forEach(element => {
        document.write(`<li>${element}`)
    });
    document.write("</ol>")
} 
mostrarArray(paises);
mostrarArray(paises.reverse())

function añadirElemento(array){
    let posicion=prompt("Dime la posicion en la que lo deseas añadir (empezando por 0)");
    let elemento=prompt("Dime el elmento a añadir");
    array.splice(posicion,0,elemento)
    mostrarArray(array);//Descomentar la funcion
}
añadirElemento(paises); 

function añadirPais(array){
    let pais=prompt("Dime un pais");
    let posicion=array.indexOf(pais);
    if(posicion==-1){
        array.push(pais);
        document.write(`El pais ${pais} ha sido añadido al final del array`);
    } else{
        document.write(`El pais ${pais} ya estaba en la posicion ${posicion}`);
    }
}
    mostrarArray(array);

    function eliminarPais(array){
    let pais=prompt("Dime un pais a eliminar");
    let posicion=array.indexOf(pais);
    if(posicion==-1){
        document.write(`El pais ${pais} no esta en el array`);
    } else{
        array.splice(posicion,1);
        document.write(`El pais ${pais} ha sido eliminado de la posicion ${posicion}`);
    }
    }
    mostrarArray(array); */


    /* 27 Define una función a la que le pasaremos un número y el tipo de redondeo a realizar. La función devolverá el resultado del redondeo 
y además mostrará el valor del redondeo en el documento junto a un mensaje indicando el tipo de redondeo.  */
/*  function redondeo(numero,tipo){
    if(isNaN(numero)){
        document.write(`<p>El valor ${numero} no es un numero</p>`);
        return
    }else {
    let redondeo;
    numero=parseFloat(numero);
    switch (tipo) {
        case "arriba":
            redondeo=Math.ceil(numero);
            break;
        case "abajo":
            redondeo=Math.floor(numero);
            break;
        case "normal":
            redondeo=Math.round(numero);
            break;
        default:
            redondeo="Tipo de redondeo no valido";
            break;
    }
    document.write(`<p>El redondeo de ${numero} es ${redondeo} con el tipo de redondeo ${tipo}</p>`);
    return redondeo;
    }
} */
//ejemplos de uso
// redondeo(3.3,"arriba");
// redondeo(-2.5,"normal");
/* let numero1=(prompt("Dime un numero"));
let tipoRedondeo=prompt("Dime un tipo de redondeo");//Lo pregunta igual a pesar de que no sea corecto el numero.
redondeo(numero1, tipoRedondeo);   */

/* 28  Define una función a la que le pasaremos dos enteros (limite inferior y límite superior) 
y la función nos devolverá una entero aleatorio en el rango [limiteInferior,limiteSuperior).
     Además mostrará en el documento un mensaje indicando el número aleatorio y el rango en el que se encuentra.*/
/* 
function numeroAleatorio(limiteInferior,limiteSuperior){
    let numero=Math.floor(Math.random()*(limiteSuperior-limiteInferior+1)+limiteInferior);
    document.write(`<p>El numero aleatorio entre ${limiteInferior} y ${limiteSuperior} es ${numero}</p>`);
    return numero;
}     

let limiteInferior=parseInt(prompt("Dime un limite inferior (incluido)"));
let limiteSuperior=parseInt(prompt("Dime un limite superior (El limite superior no incluido)"));
numeroAleatorio(limiteInferior, limiteSuperior);  */


/*  29  Define una función a la que le pasaremos un ángulo y 
la función trigonométrica a aplicar y nos devolverá el resultado de aplicar la función trigonométrica  y mostrará en el documento la operación aplicada con el resultado.*/

/* function trigonometrica(angulo,funcion){
    switch (funcion) {
        case "sin":
            document.write(`<p>El seno de ${angulo} es ${Math.sin(angulo*Math.PI/180)}</p>`);//angulo hay que psarlo a radianes
            break;
        case "cos":
            document.write(`<p>El coseno de ${angulo} es ${Math.cos(angulo*Math.PI/180)}</p>`);
            break;
        case "tan":
            document.write(`<p>La tangente de ${angulo} es ${Math.tan(angulo*Math.PI/180)}</p>`);
            break;
    }
}  */
/* let angulo=parseInt(prompt("Dime un angulo en grados"));
let funcion=prompt("Dime una funcion trigonometrica (sin, cos, tan)");
trigonometrica(angulo,funcion); */

/* 30 Define una función que muestre la fecha actual en diferentes formatos
5/10/2021
Wed Oct 06 2021.
Wed, 06 Oct 2021 15:54:47 GMT
 */

/* function fechaActual(){
    let fecha=new Date();
    document.write(`<p>${fecha.toLocaleDateString()}</p>`);
    document.write(`<p>${fecha.toDateString()}</p>`);
    document.write(`<p>${fecha.toUTCString()}</p>`);
}
fechaActual();  */

/* 31 Define una función que muestre la hora actual en diferentes formatos
14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35 AM (hora con minutos y AM o PM según sea antes o después del medio día). */

/* function horaActual(){
    let fecha=new Date();
    document.write(`<p>${fecha.toLocaleTimeString()}</p>`);
    document.write(`<p>${fecha.toLocaleTimeString("en-US")}</p>`); // De esta forma nos muestra directamente PM o AM. HAy otras formas de hacerlo.
}
horaActual();  */

 /* 32 Define una función que muestre el número de días que  quedan desde hoy hasta el fin de curso (el 23 de junio). */
 /* function diasHastaFinDeCurso(){
    let fechaActual=new Date();
    let fechaFinDeCurso=new Date(2025,5,23);
    let dias=(fechaFinDeCurso-fechaActual)/(1000*60*60*24);
    document.write(`<p>Quedan ${Math.floor(dias)} dias hasta el fin de curso</p>`);
}
diasHastaFinDeCurso(); */
/* 33 Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) 
y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.
 Por ejemplo, introducir el 05/23 para el día 23 de mayo. */

 /* 
 let cumpleaños=prompt("Dime tu fecha de cumpleaños en formato mm/dd");
 const fechaCumpleaños = new Date(`"2025/${cumpleaños}"`);
 //console.log(fechaCumpleaños.toDateString());
 for(let i=2025;i<=2100;i++){
     if(fechaCumpleaños.getDay()==0){
         document.write(`<p>El dia ${fechaCumpleaños.toLocaleDateString()} es domingo</p>`);
     }
     fechaCumpleaños.setFullYear(i+1);
 }  */

      /*  34 Escribe una función para mostrar el día de la semana en formato corto: 
 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’. */

 // Otraopcion es usar un Array y el indice.

/*  function diaSemanaCorto(){
    let fecha=new Date();
    switch (fecha.getDay()) {
        case 0:
            document.write(`<p>SU</p>`);
            break;
        case 1:
            document.write(`<p>MO</p>`);
            break;
        case 2:
            document.write(`<p>TU</p>`);
            break;
        case 3:
            document.write(`<p>WE</p>`);
            break;
        case 4:
            document.write(`<p>TH</p>`);
            break;
        case 5:
            document.write(`<p>FR</p>`);
            break;
        case 6:
            document.write(`<p>SA</p>`);
            break;
        default:
            break;
    }
 }
    diaSemanaCorto(); */

    /* 35 Escribe una función que devuelva el último día del mes dado para un año dado. 
A veces es 30, 31 o incluso 28/29 para febrero. */
/* function ultimoDiaMes(mes,anio){
    let fecha=new Date(anio,mes,0);// EL TRUCO ESTA EN QUE AL PONER 0 LA FECHA QUE TOMA ES EL ULTIMO DIA DEL MES ANTERIOR, PERO COMO LOS MESES LOS EMPIZA EN 0  , TACHAN
    document.write(`<p>El ultimo dia del mes ${mes} del año ${anio} es ${fecha.getDate()}</p>`);
}
ultimoDiaMes(2,2020); */

/* 36 Escribe una función que devuelva la cantidad de segundos transcurridos 
desde el comienzo del día. */
/* function segundosTranscurridos(){
    let fecha=new Date();
    document.write(`<p>Desde el comienzo del dia han pasado ${fecha.getHours()*3600+fecha.getMinutes()*60+fecha.getSeconds()} segundos</p>`);
}
segundosTranscurridos(); */

/* 38 Crea un programa que muestre en el documento HTML la siguiente información:
Alto y ancho interno y externo de la ventana actual
Nombre y versión del navegador.
Comprobar si las cookies están habilitadas
Muestra la URL actual.
Muestra la profundidad de color de la pantalla  y la resolución. */

/* function mostrarInfoNavegador(){
    document.write(`<p>Alto interno de la ventana: ${window.innerHeight}</p>`);
    document.write(`<p>Ancho interno de la ventana: ${window.innerWidth}</p>`);
    document.write(`<p>Alto externo de la ventana: ${window.outerHeight}</p>`);
    document.write(`<p>Ancho externo de la ventana: ${window.outerWidth}</p>`);
    document.write(`<p>Nombre del navegador: ${navigator.appName}</p>`);
    document.write(`<p>Versión del navegador: ${navigator.appVersion}</p>`);
    document.write(`<p>Cookies habilitadas: ${navigator.cookieEnabled}</p>`);
    document.write(`<p>URL actual: ${window.location.href}</p>`);
    document.write(`<p>Profundidad de color de la pantalla: ${screen.colorDepth}</p>`);
    document.write(`<p>Resolución de la pantalla: ${screen.width} x ${screen.height}</p>`);
}
mostrarInfoNavegador(); */
/* setTimeout(()=>window.location.href="http://www.google.com",3000); */

/* 39 Crea un programa que pida al usuario una URL, y con este dato abrir  otra ventana con esta URL 
y de ancho y alto la mitad de la ventana actual. */
/* function abrirVentana(){
    let url=prompt("Dime una URL");
    let ancho=window.innerWidth/2;
    let alto=window.innerHeight/2;
    window.open(url,"","width="+ancho+",height="+alto);
} 
 abrirVentana();  */

 /* 40 Crea un programa que vaya mostrando en un documento HTML la hora, debe actualizarse cada segundo. 
El Mensaje que muestre debe ser con  el siguiente formato: “Son las 09:25:03 horas PM” es decir debe mostrar la hora en formato 12 Horas (AM/PM). Ayuda , 
debes usar alguno de los métodos globales del objeto window que nos permite diferir la ejecución de una tarea. */

/* function mostrarHora(){
    let fecha=new Date();
    let horas=fecha.getHours();
    let minutos=fecha.getMinutes();
    let segundos=fecha.getSeconds();
    let ampm="AM";
    if(horas>=12){
        ampm="PM";
        if(horas>12){
            horas-=12;
        }
    }
    if(horas<10){
        horas="0"+horas;
    }
    if(minutos<10){
        minutos="0"+minutos;
    }
    if(segundos<10){
        segundos="0"+segundos;
    }
    document.body.innerHTML=`<h3>Son las ${horas}:${minutos}:${segundos} horas ${ampm}</h3>`;
}
setInterval(mostrarHora,1000);  */

/*  41 Crea un programa que pida el nombre a usuario la primera vez que visita el documento, si ya la ha visitado que le muestre un mensaje “Hola nombreUsuario, otra vez por aquí”. 
 Si no la ha visitado que le de la bienvenida y almacene su nombre en la cookie. Utiliza una cookie “usuario”.La fecha de expiración de la cookie es de un año o 365 días. */
 // Meto como ayuda  las funciones get y set  de w3cschools para gestion de cookies
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } 

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function pedirNombre() {
    let nombre = getCookie("usuario");
    if (nombre === "") {
        nombre = prompt("¿Cuál es tu nombre?");
        setCookie("usuario", nombre, 365);
        alert(`Bienvenido, ${nombre}!`);
    } else {
        alert(`Hola ${nombre}, otra vez por aquí!`);
    }
}

pedirNombre(); 

// version con Local storage

 function pedirNombreLS() {
    let nombre = localStorage.getItem("usuario");
    if (nombre === null) {
        nombre = prompt("¿Cuál es tu nombre?");
        localStorage.setItem("usuario", nombre);
        alert(`Bienvenido, ${nombre}!`);
    } else {
        alert(`Hola ${nombre}, otra vez por aquí!`);
    }
}
pedirNombreLS(); 