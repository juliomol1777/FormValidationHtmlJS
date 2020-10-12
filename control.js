function validar(){

    user=document.getElementById("usuario").value;
    pass=document.getElementById("clave").value;
    
    
    if(!user == "" && !pass == ""){
        if(verificaArroba(user)){
            alert("redireccionando")
            document.getElementById("form").submit();
        }
        else{
            alert("el nombre de Usuario debe contener un @")
        }
    }
    else{
        alert("Debe rellenar ambos campos");
    }
}

function validar2(){
    enviar= false;
    user=document.getElementById("usuario").value;
    pass=document.getElementById("clave").value;
    
    
    if(!user == "" && !pass == ""){
        if(verificaArroba(user)){
            alert("redireccionando")
            enviar = true;
        }
        else{
            alert("el nombre de Usuario debe contener un @")
        }
    }
    else{
        alert("Debe rellenar ambos campos");
    }
    return enviar;
}

function verificaArroba(nombre){

    var contador = 0;
    for (let i = 0; i < nombre.length; i++) {
        var letras = nombre.charAt(i);
        if(letras == "@"){
            contador+= 1;
        }  
    }
    if(contador == 1){
        return true;
    }
    else{
        return false;
    }
}