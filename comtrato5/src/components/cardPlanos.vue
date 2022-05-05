<template>

  <!-- 3 cards com planos? -->
    <div class="container bary">
      <div class="container-fluid row justify-content-around p-2">
        <div class="card shadow bg-body rounded" style="width: 18rem">
          <img :src="imgPlano" class="card-img-top p-2" alt="card1"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">Go somewhere</a>
          </div>
        </div>

        <div class="card shadow bg-body rounded" style="width: 18rem">
          <img :src="imgPlano" class="card-img-top" alt="card1" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">Go somewhere</a>
          </div>
        </div>

        <div class="card shadow bg-body rounded" style="width: 18rem">
          <img :src="imgPlano" class="card-img-top" alt="card1" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-success">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    nome:'cardPlanos',
    data(){
        return{
            imgPlano: "/img/logo.png"
        }
    }
}
</script>

<style>

</style>