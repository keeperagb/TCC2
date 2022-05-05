<template>
  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header loguinho">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">COMTRATO</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="modal-header">
      
    </div>
    <div class="menuSidebar ">
      <router-link class="btn itemMenuSidebar" to="/Dashboard">Painel</router-link>
      <router-link class="btn itemMenuSidebar" to="/Dashboard">Meus Contratos</router-link>
      <hr>
      <router-link class="btn itemMenuSidebar" to="/Dashboard"><i class="bi bi-person-fill"></i>Meu Perfil</router-link>
      <router-link class="btn itemMenuSidebar" to="/#"><i class="bi bi-box-arrow-left"></i>Sair</router-link>
    </div>
  </div>
</div>
</template>

<script>

export default {
  nome: 'componenteSidebar'
}
</script>

<style>
  .menuSidebar{
    display: flex;
    flex-direction: column;
  }
  .bi-box-arrow-left, .bi-person-fill{
    margin-right: 10px;
  }
  .itemMenuSidebar:hover{
    background-color: rgb(238, 247, 255);
  }
</style>

