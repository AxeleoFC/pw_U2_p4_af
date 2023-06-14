const app = Vue.createApp({
    data(){
        return{
            listUsuario:[],
            inputN: '',
            inputA: '',
            inputE: '',
            inputC: ''
        }
    },
    methods:{
        agregarUsuario(){
            const nUsua={
                Nombre: this.inputN,
                Apellido: this.inputA,
                Edada: this.inputE,
                Ciudad: this.inputC
            };
            this.inputN=''
            this.inputA=''
            this.inputE=''
            this.inputC=''
            this.listUsuario.unshift(nUsua);
            

        },
        eliminarLista(){
            this.listUsuario=[]
        }
    }
})

app.mount('#usuarioID')