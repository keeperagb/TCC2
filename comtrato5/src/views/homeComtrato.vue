<template>
  <div class="home">
    <menuNavBarVue />
    <topo-inicio-vue />
    <card-planos-vue />
    <mid-tex-img-vue />
    <card-planos-valores-vue />
    <endFooterVue />
  </div>
</template>

<script>
import cardPlanosVue from '../components/cardPlanos.vue'
import cardPlanosValoresVue from '../components/cardPlanosValores.vue'
import midTexImgVue from '../components/midTexImg.vue'
import topoInicioVue from '../components/topoInicio.vue'
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'

export default {
  components:{
    topoInicioVue,
    cardPlanosVue,
    midTexImgVue,
    cardPlanosValoresVue,
    menuNavBarVue,
    endFooterVue,
    
    }

}
</script>

<style>

</style>