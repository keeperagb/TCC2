<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

   <!-- Planos e valores -->

    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Gratuito</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                R$0<small class="text-muted fw-light">/ano</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                class="w-100 btn btn-lg btn-outline-success"
              >
                Começar agora mesmo
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $15<small class="text-muted fw-light">/mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-success">
                Assinar
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-success">
            <div class="card-header py-3 text-white bg-success border-primary">
              <h4 class="my-0 fw-normal">Empresarial</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $29<small class="text-muted fw-light">/mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-success">
                Enrte em contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    nome: 'cardPlanosValores'
}
</script>

<style>

</style>