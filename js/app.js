console.log("Componente Vue")
console.log(Vue)

//OptionApi
const app = Vue.createApp({
    //Opcion1,
    //opcion2,
    //opcionn, etc

    template: `
    <h1>Hola mundo</h1>
    <p>Desde Vue.JS</p>
    `
})

app.mount('#miApp')