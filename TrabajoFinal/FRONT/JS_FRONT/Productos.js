const {createApp}=Vue
createApp({
    data(){
        return{
            url:"http://deporcenter.pythonanywhere.com/productos",
            productos:[],
           
        }
    },
    methods:{
        getProductos(url){
            fetch(url)
            .then(Response=> Response.json())
            .then(data=>{this.productos=data})
                console.log(data)
            .catch(err=>{
                console.error(err)
            })
        }
    }, 
    mounted() {
        this.getProductos(this.url)

    },  
    
}).mount("#app")
