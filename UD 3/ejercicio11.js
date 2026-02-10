document.addEventListener("DOMContentLoaded", mostrarInfo)

function mostrarInfo(){
const divInfo=document.querySelector("#mostrarInformacion")
//Número de párrafos que contiene el documento.
divInfo.innerHTML+=`El numero de parrafos es: ${document.querySelectorAll("p").length}</br>`;
//Los 20 primeros caracteres del primer párrafo.
divInfo.innerHTML+=`Los 20 primeros caracteres del primer párrafo: ${document.querySelectorAll("p")[0].innerText.substring(0,20)}<\br>`;
//El número de enlaces.
divInfo.innerHTML+=`El número de enlaces: ${document.querySelectorAll("a").length}</br>`;
//La dirección a la que apunta el segundo enlace.
divInfo.innerHTML+=`La dirección a la que apunta el segundo enlace: ${document.querySelectorAll("a")[1].href}</br>`;
//La dirección a la que apunta el penúltimo enlace.
divInfo.innerHTML+=`La dirección a la que apunta el penúltimo enlace: ${document.querySelectorAll("a")[document.querySelectorAll("a").length-2].href}</br>`;
//El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”
divInfo.innerHTML+=`El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”: ${document.querySelectorAll("a[href='https://www.cpifppiramide.com/']").length}</br>`;
//El número de enlaces que hay en el segundo párrafo.
divInfo.innerHTML+=`El número de enlaces que hay en el segundo párrafo: ${document.querySelectorAll("p")[1].querySelectorAll("a").length}</br>`;
//El numero de enlaces hijos de un p que tengan color rojo
divInfo.innerHTML+=`El número de enlaces hijos de un p que tenga color red: ${document.querySelector('p[style="color:red"]').querySelectorAll("a").length}</br>`;
}