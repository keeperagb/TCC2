<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

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