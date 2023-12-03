function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value //input
    let apellido_ingresado = document.getElementById("apellido").value 
    let dni_ingresado = document.getElementById("dni").value 
    let telefono_ingresado = document.getElementById("telefono").value 
    let mail_ingresado = document.getElementById("mail").value 
    let texto_ingresado = document.getElementById("texto").value 

    let datos = {
        nombre: nombre_ingresado,
        apellido:apellido_ingresado,
        dni:dni_ingresado,
        telefono:telefono_ingresado,
        mail:mail_ingresado,
        texto:texto_ingresado
    }

    console.log(datos);

    let url = "https://scopolia.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "./tablaContactos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}