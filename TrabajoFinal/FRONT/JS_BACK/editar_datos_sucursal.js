let cadena = location.search;

let datos = new URLSearchParams(cadena);

let resultado = {};

for (const [clave, valor] of datos) {
    resultado[clave] = valor;
}

document.getElementById("id").value = resultado["id"]
document.getElementById("provincia").value = resultado["provincia"]
document.getElementById("localidad").value = resultado["localidad"]
document.getElementById("direccion").value = resultado["direccion"]
document.getElementById("telefono").value = resultado["telefono"]
document.getElementById("email").value = resultado["email"]