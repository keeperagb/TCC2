<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white">Inicio</router-link></li>
          <li><router-link to="/aula" class="nav-link px-2 text-white">Comtrato</router-link></li>
          <li><router-link to="/Planos" class="nav-link px-2 text-white">Planos</router-link></li>
          <li><router-link to="/" class="nav-link px-2 text-white">Perguntas</router-link></li>
          <li><router-link to="/Sobre" class="nav-link px-2 text-white">Sobre</router-link></li>
        </ul>

        <div class="text-end">
            <router-link  to="/Login" class="btn btn-success login">Login</router-link>
            <router-link to="/Cadastro" class="btn btn-outline-secondary">Cadastra-se</router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
    nome: 'menuNavBar',
    components:{
    }
}
</script>

<style>
  .login{
    margin-right: 10px;
  }
</style>