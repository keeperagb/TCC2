<template>

<button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modelDeCadastro">Cadastro</button>

<div class="modal fade" id="modelDeCadastro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modelDeCadastro" aria-hidden="true">
  <div class="modal-dialog modal-ms">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title textoForm" id="modelDeCadastroLabel">Cadastro de Usuário</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <componenteCadastroVue />
    </div> 
  </div>
</div>
  
</template>

<script>

import componenteCadastroVue from './componenteCadastro.vue';

export default {
    nome: 'modalCadastro',
    components:{
      componenteCadastroVue,
    }
    
}
</script>

<style>

</style>