<template>

  <div class="container-fluid topoImg">
      <div class="AQUI">
        <button type="button" class="btn btn-secondary btn-lg">
          EMITIR CONTRATO AGORA!
        </button>
      </div>
    </div>
</template>

<script>
export default {
    nome: 'topoImagemInicio'
}
</script>

<style>

.topoImg {
  height: 900px;
  background-image: url("../assets/soybeans.jpg");
  background-size: cover;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
}

.AQUI {
  align-self: center;
}

</style>