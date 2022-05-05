<template>
<div class="container-fluid topResumoContratos bg-secondary p-4" style="--bs-bg-opacity: .2;">
    <div class="card cardConteudo shadow p-3   rounded bg-primary text-white" style="width: 20rem; --bs-bg-opacity: .8;">
      <div class="card-body cardDash">
        <h2 class="card-title">Contratos:</h2>
        <hr>
        <h1>06</h1>
        </div>
    </div>
    <div class="card cardConteudo shadow p-3  bg-success text-white rounded" style="width: 20rem; --bs-bg-opacity: .8">
      <div class="card-body cardDash">
        <h2 class="card-title">Abertos:</h2>
        <hr>
        <h1>04</h1>
        </div>
    </div>
    <div class="card cardConteudo shadow p-3  bg-warning text-white rounded" style="width: 20rem; --bs-bg-opacity: .8">
      <div class="card-body cardDash">
        <h2 class="card-title">Finalizados:</h2>
        <hr>
        <h1>02</h1>
        </div>
    </div>
</div>


  <div class="container p-3 ">
    <div class="row">
      <div class="col-10">
        <h3>Contratos:</h3>
      </div>
      <div class="col-2 stNovoContrato">
        <router-link to="/NovoContrato" type="button" class="btn btn-success">+ Novo Contrato</router-link>
      </div>
    </div>
  </div>

<div class="container stContratosLista p-4">

  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 01</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Compra</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-success text-white">Status: Em aberto</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 02</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Compra</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-warning text-white">Status: Finalizado</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 03</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Venda</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-success text-white">Status: Em aberto</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>

</div>
<div class="container stContratosLista">

  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 01</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Compra</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-success text-white">Status: Em aberto</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 02</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Compra</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-warning text-white">Status: Finalizado</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 20rem;">
    <img :src="imgSoja" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Contrato Numero: 03</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Produto: Soja em Grãos</li>
      <li class="list-group-item">Contrato: Venda</li>
      <li class="list-group-item">Cliente: Alisson Gean Buiarski</li>
      <li class="list-group-item bg-success text-white">Status: Em aberto</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Detalhes</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>

</div>
<endFooterVue />
</template>

<script>
import endFooterVue from '../endFooter.vue'

export default {
  nome: 'inicioDashboard',

  data(){
    return{
      imgSoja: "/img/soybeans.jpg",
            imgMilho: "/img/Milho.jpg"
        }
    },

    components:{
      endFooterVue,

    }
}
</script>

<style>
.topResumoContratos{
  display: flex;
  padding: 15px;
  justify-content: space-around;
}

.cardConteudo{
  display: flex;
  text-align: center;
  border-radius: 50px;
}

.stNovoContrato{
  display: flex;
  justify-content: end;
}

.stContratosLista{
  display: flex;
  justify-content: space-around;
}
</style>