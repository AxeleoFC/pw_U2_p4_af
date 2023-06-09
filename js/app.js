console.log("Componente Vue")
console.log(Vue)

//OptionApi
const app = Vue.createApp({
    //Opcion1,
    //opcion2,
    //opcionn, etc
/*
    template: `
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS</p>
    <p>{{1+1}}</p>
    `*/

    // Es una opcion que permite declarar propiedades reactivas, estas permiten vincular la informacion de la vistas del html con la programacion js
    data(){
        return{
            nombre: 'Axel',
            apellido: 'Flores',
            mensaje: 'Hola mundo 2 desde VIU.JS'
        }
    },

    //esta opcion permite declarar metdos js
    methods:{
        cambiarNombre(){
            console.log('Boton cambiar nombre')
            this.nombre='Leonardo'
        },
        cambiarApellido(){
            console.log('Boton cambiar apellido')
            this.apellido='Campaña'
        }
    }
})

app.mount('#miApp')