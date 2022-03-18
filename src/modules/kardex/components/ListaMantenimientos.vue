<template>
    <div class="mantenimiento-list-container">
        <div class="px-2 pt-2">
            <input
             type="text"
             class="form-control"
             placeholder="Buscar placa"
             />
        </div>

        <div class="mantenimiento-scrollarea">
            <Mantenimiento v-for="item in 100" :key="item"/>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Mantenimiento: defineAsyncComponent(() => import('./Mantenimiento.vue'))
    }
}
</script>

<style lang="scss" scoped>

.mantenimiento-list-container{
    border-right: 1px solid #2c3e50;
    height: calc( 100vh - 56px );
}

.mantenimiento-scrollarea{
    height: calc( 100vh - 110px );
    overflow: scroll;
}
</style>