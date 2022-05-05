<template>
<button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#telaLogin">Logar</button>

<div class="modal fade" id="telaLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="telaLoginLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title textoForm" id="telaLoginLabel">Efetuar Login</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <componenteLoginVue />
        </div>
      </div>
    </div>
  
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import componenteLoginVue from './componenteLogin.vue';

export default {
    nome: 'modalLogin',
    components: {
      componenteLoginVue
    }

}
</script>

<style>
.textoForm{
  display: flex;
  color: black;
  text-align: start;
  margin-bottom: 3px;
}
.formLogin{
  display: flex;
  flex-direction: column;
}

</style>