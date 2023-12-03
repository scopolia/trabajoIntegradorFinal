document.addEventListener("DOMContentLoaded", function () {
    const seleccionElemento = document.getElementById("elementos");
    const infoDiv = document.getElementById("info");

    let listaSucursales = [];

    function cargarInformacion(opcionId) {

        if (!opcionId) {
            infoDiv.innerHTML = '';
            return;
        }

        const sucursalSeleccionada = listaSucursales.find(sucursal => sucursal.id == opcionId);

        if (sucursalSeleccionada) {
            const { direccion, email, telefono } = sucursalSeleccionada;

            infoDiv.innerHTML = `

            <div class="grid_data">

                <div class="parrafo">
                <p class="data">Dirección:</p>
                <p class="data_valor">${direccion}</p>
                </div>

                <div class="parrafo">
                <p class="data"> Email:</p>
                <p class="data_valor mail">${email}</p>
                </div>

                <div class="parrafo">
                <p class="data">Teléfono:</p>
                <p class="data_valor">${telefono}</p>
                </div>
             </div>
            `;
        } else {
            console.error("No se encontró la sucursal correspondiente al ID seleccionado.");
        }
    }

    const url = 'https://sucursales.pythonanywhere.com/sucursales';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            listaSucursales = data;

            data.forEach((elemento) => {
                const opcion = document.createElement("option");
                opcion.value = elemento.id;
                opcion.text = elemento.localidad;
                seleccionElemento.appendChild(opcion);
            });
        })
        .catch((error) => {
            console.error("Error al cargar la lista de elementos: " + error);
        });

    seleccionElemento.addEventListener("change", function () {
        const seleccionOpcion = seleccionElemento.value;
        cargarInformacion(seleccionOpcion);
    });
});