<template>
    <Navbar /> <!--Navbar hecho en components/Navbar.vue-->

    <div class="d-flex">
        <div class = "col-4">
            <ListaMantenimientos />
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        ListaMantenimientos: defineAsyncComponent(() => import('../components/ListaMantenimientos.vue')),
    }
}
</script>