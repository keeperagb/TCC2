<template>
<menuNavBarVue />
<div class="container">
    <card-planos-vue />
    <card-planos-valores-vue />
</div>
<endFooterVue />
</template>

<script>
import cardPlanosValoresVue from '@/components/cardPlanosValores.vue'
import cardPlanosVue from '@/components/cardPlanos.vue'
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'

export default {
components:{
    cardPlanosValoresVue,
    cardPlanosVue,
    menuNavBarVue,
    endFooterVue
}
}
</script>

<style>

</style>