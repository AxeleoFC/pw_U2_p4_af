function estudiantes(){
    var estu= []
    for (let index = 0; index < 10; index++) {
        const estudiante={
            nomb: "Estudiante Nombre "+index,
            apell: "Estudiante Apellido "+index
        }
        estu.push(estudiante)
    }
    return estu
}

const app = Vue.createApp({
    data(){
        return{
            miarreglo:estudiantes(),
            nombre:'Axel'
        }
    },
    methods:{
        agregarEstudiante(event){
            console.log("Vamos a agregar sin modificador de evento")
            console.log(this.nombre)
            console.log(event.charCode)
            if (event.charCode=='13') {
                console.log('Es enter')
                const nEstudiante={
                    nomb: this.nombre
                }
                this.miarreglo.unshift(nEstudiante)
            }else{
                console.log('No es enter')
            }
        },
        agregarEstudiante2(){
            console.log('Modificador de evento')
            const nEstudiante={
                nomb: this.nombre,
                apell: this.apellido
            }
            this.miarreglo.unshift(nEstudiante)
        }
    }
})

app.mount('#myApp2')
/*
function insertar(estudiante) {
    
}
function insertar({nombre,apellido}) {
    
}*/