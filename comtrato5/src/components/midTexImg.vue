<template>

   <!-- Texto e imagem -->

    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img :src="imgMid" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Formalize suas compras ou vendas com a maxima segurança.
          </h1>
          <p class="lead">
            Com o Comtrato você tem a segurança de criar um contrato seja de compra ou venda, 
            e os envolvidos assinam o documento, assim formalizando toda negociação.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-success btn-lg px-4 me-md-2">
              Assinar
            </button>
            <button type="button" class="btn btn-outline-success btn-lg px-4">
              Conhecer
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    nome: 'midTexImg',
    data(){
        return{
            imgMid: '/img/contratoBG.jpg'
        }
    }
}
</script>

<style>

</style>