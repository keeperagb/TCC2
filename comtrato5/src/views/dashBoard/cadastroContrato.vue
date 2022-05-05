<template>
    <componenteSidebarVue />
    <navbarSidebarVue />
    <formNovoContratoVue />
    <end-footer-vue />
</template>

<script>
import endFooterVue from '@/components/endFooter.vue'
import formNovoContratoVue from '@/components/dashboard/formNovoContrato.vue'
import componenteSidebarVue from '@/components/sidebar/componenteSidebar.vue'
import navbarSidebarVue from '@/components/sidebar/navbarSidebar.vue'

export default {
    nome: 'novoContrato',
   
    components: {
        endFooterVue,
        formNovoContratoVue,
        componenteSidebarVue,
        navbarSidebarVue,
    }
}
</script>

<style>

</style>