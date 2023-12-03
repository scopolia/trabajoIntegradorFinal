function guardar() {
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

    let url = "https://sucursales.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    }
    fetch(url,options)
        .then(function () {
            console.log("creado")
            alert("Sucursal agregada")

            window.location.href = "./tabla_sucursales.html";
        })
        .catch(err => {
            alert("Error al grabar")
            console.error(err);
        })
}