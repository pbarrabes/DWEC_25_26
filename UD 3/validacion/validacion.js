document.addEventListener("DOMContentLoaded",asignarManejadores);

function asignarManejadores(){
    document.getElementById("formulario").addEventListener("submit",validarFormulario);
    document.getElementById("nombre").addEventListener("blur",validarNombre);
    document.getElementById("email").addEventListener("blur",validarEmail)
}

function validarFormulario(e){
    e.preventDefault();

    //ESto esta sin acabar, teneis que ver por que no sirve.
    if(validarNombre()){
        e.target.submit();
    }

 
}

function validarNombre(e){
    if(e.target.value.length<3){
        e.target.classList.add("invalido");
        document.getElementById("errorNombre").innerText="El nombre debe contener al menos 3 caracteres";
        return false
    }else{
        e.target.classList.remove("invalido");
        document.getElementById("errorNombre").innerText=""; 
        return true
    }
}

function validarEmail(e){

    if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.target.value)){
        e.target.classList.add("invalido");
        document.getElementById("errorEmail").innerText="Debes introducir un mail valido"; 
    }else{
         e.target.classList.remove("invalido");
        document.getElementById("errorNombre").innerText="";
    }

}
