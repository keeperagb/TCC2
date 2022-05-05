<template>
    <navbarSidebarVue />
    <componenteSidebarVue />
    <inicioDashboardVue />
</template>

<script>
import componenteSidebarVue from '@/components/sidebar/componenteSidebar.vue'
import navbarSidebarVue from '@/components/sidebar/navbarSidebar.vue'
import inicioDashboardVue from '@/components/dashboard/inicioDashboard.vue'
export default {
    components:{
        componenteSidebarVue,
        navbarSidebarVue,
        inicioDashboardVue,
    }

}
</script>

<style>

</style>