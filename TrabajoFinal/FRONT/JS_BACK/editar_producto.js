// Procedimiento para traer los datos del registro a editar
// Ej: "id=9&nombre=bulbasaur"
let cadena = location.search; // Cadena con los símbolos & y =

// Crear un objeto URLSearchParams con la cadena
// El objeto URLSearchParams en JavaScript es una
// interfaz que proporciona métodos y propiedades para
// trabajar con las cadenas de consulta (query strings) en URLs.
// Facilitando la obtención de parámetros y valores individuales
let datos = new URLSearchParams(cadena);

// Crear un objeto para almacenar los nombres de las variables y sus valores
let resultado = {};

// Iterar sobre los parámetros y guardar los nombres y valores en el objeto resultado
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}

// Imprimir el resultado
console.log(resultado); // Esto mostrará un objeto con las variables y sus valores


// Procedimiento para mostrar los datos a editar en el formulario de edición
document.getElementById("idpro").value = resultado["idpro"]
document.getElementById("nompro").value = resultado["nompro"]
document.getElementById("preciopro").value = resultado["preciopro"]
document.getElementById("urlimgpro").value = resultado["urlimgpro"]

function modificar() {
    let idpro = document.getElementById("idpro").value
    let nombreForm = document.getElementById("nompro").value
    let precioForm = document.getElementById("preciopro").value
    let urlimgForm = document.getElementById("urlimgpro").value

    let producto = {
        nompro: nombreForm,
        preciopro: precioForm,
        urlimgpro: urlimgForm,
    }
    
    // let url = "http://localhost:5000/update_productos/"+idpro
    let url = "https://deporcenter.pythonanywhere.com/update_productos/"+idpro    
    var options = {
        body: JSON.stringify(producto),
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
            window.location.href = "./tabla_productos.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}