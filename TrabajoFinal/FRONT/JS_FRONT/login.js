const user = document.getElementById('user').value;
const pass = document.getElementById('pass').value;
const btn_log = document.getElementById('pass').value;
const form = document.getElementById('form');
const parrafo = document.getElementById('submit_msj');

console.log(user)


form.addEventListener('submit', e=>{
    e.preventDefault();
       
        let msj = ""
        let validacion = false;

    if(user === "user"){
        msj += "Coloque un usuario valido <br>";
        validacion = false;
    }
    
    if( pass === "123"){
        msj += "Coloque una contraseña valida <br>"
        validacion = false;
    }
    
    if(validacion){
        parrafo.innerHTML = msj;
    }else{
        parrafo.innerHTML = "Gracias por contactarte";
        window.location.href = "opciones_back.html";
       form.reset()


    } 

});