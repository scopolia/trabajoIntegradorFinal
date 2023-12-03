function modificar() {
    let id = document.getElementById("id").value
    let provincia_ingresada = document.getElementById("provincia").value
    let localidad_ingresada = document.getElementById("localidad").value
    let direccion_ingresada = document.getElementById("direccion").value
    let telefono_ingresado = document.getElementById("telefono").value
    let email_ingresado = document.getElementById("email").value

    let datos = {
        provincia: provincia_ingresada,
        localidad: localidad_ingresada,
        direccion: direccion_ingresada,
        telefono: telefono_ingresado,
        email: email_ingresado
    }

    console.log(datos);

    let url = "https://sucursales.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',

        headers: {'Content-Type': 'application/json'},

        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Sucursal modificada")

            window.location.href = "./tabla_sucursales.html";
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al modificar")
        })
}