function guardar() {
    // document.getElementById("nompro").value toma el valor contenio
    // en el input del documento cuyo id tiene por nombre nompro
    // <input type="text" name="nombre" id="nompro">
    let nombre_ingresado = document.getElementById("nompro").value
    let precio_ingresado = document.getElementById("preciopro").value
    let urlimg_ingresado = document.getElementById("urlimgpro").value

    console.log(nombre_ingresado );

    let enviar_producto = {
        nompro: nombre_ingresado,
        preciopro: precio_ingresado,
        urlimgpro: urlimg_ingresado,
    }

    console.log(enviar_producto);
    
    // let url = "http://localhost:5000/registro_productos"
    let url = "https://deporcenter.pythonanywhere.com/registro_productos"
    var options = {
        body: JSON.stringify(enviar_producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./tabla_productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}