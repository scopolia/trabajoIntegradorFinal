

function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let apellido_ingresado = document.getElementById("apellido").value 
    let dni_ingresado = document.getElementById("dni").value 
    let telefono_ingresado = document.getElementById("telefono").value 
    let mail_ingresado = document.getElementById("mail").value 
    let texto_ingresado = document.getElementById("texto").value 

    
    // Se arama el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        apellido:apellido_ingresado,
        dni:dni_ingresado,
        telefono:telefono_ingresado,
        mail:mail_ingresado,
        texto:texto_ingresado
    }
  
    
    let url = "https://scopolia.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            
        alert("GUARDADO") 
        window.location.href = "../index.html";
       
            
        })
        .catch(err => {
            //this.errored = true
          
            console.error(err);
        })
}