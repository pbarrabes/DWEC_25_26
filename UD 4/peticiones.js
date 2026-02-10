import { URL_SERVER } from "./constantes.js";

export function get(ruta,callback,callbackError){
     fetch(`${URL_SERVER}${ruta}`)
    .then((response=> {
                if(response.ok){
                    return response.json(); 
                }
                else{
                    throw new Error(response.statusText) 
                   }
            }
        )
        
    )
    .then(data=>callback(data))
    .catch(error=>{
            callbackError(error);
    }
    )      
}

export function post(ruta,data,callback,callbackError){//Cuando haya autentificacion faltara el token.
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),   
    }
    fetch(URL_SERVER+ruta,options)
    .then((response)=>{
        console.log(response);
        
        if(response.ok){
            return response.json();
        }else throw new Error(response.statusText);
    })
    .then((data)=>callback(data))
    .catch((error)=>callbackError(error))


}

export function del(ruta,callback,callbackError){
    const options={
        method:"DELETE",   
    }
    fetch(URL_SERVER+ruta,options)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else throw new Error(response.statusText);
    })
    .then((data)=>callback(data))
    .catch((error)=>callbackError(error))   

}

export function patch(ruta,data,callback,callbackError){
    const options={
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),   
    }
    fetch(URL_SERVER+ruta,options)
    .then((response)=>{
        console.log(response);
        
        if(response.ok){
            return response.json();
        }else throw new Error(response.statusText);
    })
    .then((data)=>callback(data))
    .catch((error)=>callbackError(error))

}