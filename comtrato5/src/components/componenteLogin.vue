<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <div class="modal-body">
            <form @submit.prevent="Login">
              <div class="mb-3 formLogin">
                <label for="exampleInputEmail1" class="textoForm textoDireita">Endereço de Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email"/>
              </div>
              <div class="mb-3 formLogin">
                <label for="exampleInputPassword1" class="textoForm textoDireita">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
              </div>
              <div class="mb-3 form-check formLogin">
                <input type="checkbox" class="form-check-input" id="exampleCheck1 "/>
                <label class="textoForm textoDireita" for="exampleCheck1">Me manter conectado</label>
              </div>
              <p>Não possui cadastro? <router-link to="/Cadastro">Cadastre-se aqui</router-link></p>
              <div div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" class="btn btn-success" value="Login">Logar</button>
              </div>
            </form>
          </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
    nome: 'componenteLoginVue',

    data(){
      return{
        inicio: "",
      }
    },
}
</script>

<style>

</style>