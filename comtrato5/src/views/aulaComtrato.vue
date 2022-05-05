<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<menuNavBarVue />
  <div class="container col-md-6">
    <form action="">
      <div class="mb-3 col-md-6">
        <label for="formGroupExampleInput" class="form-label">Nome</label>
        <input type="text" class="form-control" id="nome" v-model="nome">
      </div>
      <div class="mb-3 col-md-6">
        <label for="formGroupExampleInput2" class="form-label">E-mail</label>
        <input type="text" class="form-control" id="email" v-model="email">
      </div>
    </form>

      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button class="btn btn-primary me-md-2" type="submit" @click="enviar()">Enviar</button>
      </div>
    <br>

    <div class="card" style="width: 18rem;" v-for="(listaU, key) in lista" :key="key">
      <div class="card-body">
        <h5 class="card-title">{{listaU.nome}}</h5>
        <p class="card-text">{{listaU.email}}</p>
        <button class="btn btn-primary me-md-2" type="submit" @click="update">Editara</button>
        <button class="btn btn-primary me-md-2" type="submit" @click="remover">Excluir</button>
      </div>
    </div> 
  </div>
<endFooterVue />
</template>

<script>
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'
//import {sqlz} from '@/mysql'

export default {
  data(){
    return{
       nome:'',
       email:'', 
       lista: [],
     }
     
   },

   methods:{

     enviar(){

       if(this.nome.trim() ==='' || this.email.trim() ===''){
         return
       }else{
          this.lista.push({
            nome: this.nome,
            email: this.email
          });
          this.nome = this.email=''
       }
       
     },
     remover(key){
       this.lista.splice(key, 1)
     },
     update(lista){
        this.lista = Object.assign({}, lista)
      }
    },
    components:{
      menuNavBarVue,
      endFooterVue,
    }
   }
  

</script>

<style>


</style>