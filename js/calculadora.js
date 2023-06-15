const app = Vue.createApp({
    data(){
        return{
            numero: 0,
            total: '',
            primero: false,
            numeroR: 0,
            inputC: ''
        }
    },
    methods:{
        ingresar(idnumero, params){
            document.getElementById(idnumero).innerHTML=document.getElementById(idnumero).innerHTML+params;
        },
        res() {
            this.calculo(this.total);
            document.getElementById('numeroid').innerHTML="= "+this.numero;
            this.primero=false;
        },
        calculo(val) {
            if(!this.primero){
                this.numero=Number(document.getElementById('numeroid').innerHTML);
                this.total=val
                this.primero=true
                this.borrar('resultadoid')
                this.ingresar('resultadoid', this.numero+this.total);
            }else{
                this.borrar('resultadoid')
                this.numeroR=Number(document.getElementById('numeroid').innerHTML);
                this.ingresar('resultadoid', this.numero+this.total+this.numeroR);
                if(this.total=="+"){
                    this.numero+=this.numeroR;
                    this.total=val
                }else if(this.total=="-"){
                    this.numero-=this.numeroR;
                    this.total=val;
                }else if(this.total=="x"){
                    this.numero*=this.numeroR;
                    this.total=val
                }else if(this.total=="/"){
                    this.numero=this.numero/this.numeroR;
                    this.total=val;
                }
            }
            this.borrar('numeroid');
        },
        borrar(idnumero){
            document.getElementById(idnumero).innerHTML=""
        }

        
    }
})

app.mount('#calculadoraID')