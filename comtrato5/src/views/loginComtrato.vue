<template>
    <menuNavBarVue />
    <div class="container col-4">
        <componenteLoginVue />
    </div>
    <endFooterVue />
</template>

<script>
import componenteLoginVue from '@/components/componenteLogin.vue'
import menuNavBarVue from '@/components/menuNavBar.vue'
import endFooterVue from '@/components/endFooter.vue'
export default {
    components:{
        componenteLoginVue,
        menuNavBarVue,
        endFooterVue,
    }
}
</script>

<style>

</style>