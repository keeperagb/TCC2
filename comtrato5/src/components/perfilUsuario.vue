<template>
  <div class="home container">
    <h1>Bem vindo {{ name }}</h1>
    <router-link to="/Sobre">Sobre</router-link>
    <br>
    <button class="logout" @click="Logout">Sair</button>
  </div>
</template>
<script>

export default {
    nome: 'perfilUsuario',

  setup () {
    return{
    }
  }  
}
</script>