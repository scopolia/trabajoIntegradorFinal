const {createApp} = Vue
    
  createApp({
    data() {
        return {
            url:'https://sucursales.pythonanywhere.com/sucursales',
            sucursales:[],
            error: false,
            cargando: true
            }
        },
    
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.sucursales = data;
                    console.log('Datos de sucursales:', this.sucursales);
                    this.cargando = false
                })

                .catch(err => {
                    console.error(err);
                    this.error = true
                });
        },
        
        eliminar(id) {
            const url = 'https://sucursales.pythonanywhere.com/borrar/' +id;
            var options = {
                method: 'DELETE',
            }
            fetch(url,options)
                .then(res => res.text())
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
            })
        }
    },

  }).mount('#app');