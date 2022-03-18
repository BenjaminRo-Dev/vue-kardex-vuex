<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h1>Hola Mundo</h1>

  <button @click="goToKardex" class="btn btn-primary">Primary</button>
  <button @click="goToKardex" class="btn btn-secondary">Secondary</button>
  <button @click="goToKardex" class="btn btn-success">Succes</button>

</template>

<script>
export default {
  methods:{
    goToKardex(){//Ir a la página del kardex
      this.$router.push({name: 'mantenimiento-no-seleccionado'})//Redirecciona al src/modules/kardex/views/mantenimientoNoSeleccionado
    }
  }
}
</script>
