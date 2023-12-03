// Creo una aplicacion de Vue
const { createApp } = Vue

  createApp({
    // En data() vamos a retornar todos los variables que vamos a utilizar
    data() {
      return {
    //  url:"http://127.0.0.1:5000/productos",
        url:"https://deporcenter.pythonanywhere.com/productos",
        productos:[],
        error:false,
        cargando:true
      }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    // Hay un método de Vue que se llama created()
    // https://router.vuejs.org/guide/advanced/data-fetching
    created() {
        this.fetchData(this.url)  // Invocando al método
    },
    // En methods se desarrollan todas las funcionalidades de fetchData
    methods: {
        fetchData(url) {
            // Acá se consume la Api  /productos
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        },
        // el id se necesita para buscar en la DB y eliminarlo
        eliminar(idpro) {
        //  const url = 'http://localhost:5000/borrar_productos/' + idpro;
            const url = 'https://deporcenter.pythonanywhere.com/borrar_productos/' + idpro;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')