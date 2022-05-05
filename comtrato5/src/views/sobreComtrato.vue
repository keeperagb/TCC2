<template>
  <menuNavBarVue />
    <mid-tex-img-vue />
  <endFooterVue />
</template>

<script>
import midTexImgVue from '@/components/midTexImg.vue'
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'

export default {
    nome: 'sobreComtrato',
    components:{
        midTexImgVue,
        menuNavBarVue,
        endFooterVue
    }
}
</script>

<style>

</style>