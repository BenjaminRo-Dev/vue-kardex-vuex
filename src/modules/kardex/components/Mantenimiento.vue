<template>
  <div 
    class="mantenimiento-container mb-3 pointer p-2"
    @click="$router.push({name: 'mantenimiento', params: {id: 10}})">
      <!-- Título del mantenimiento: -->
      <div>
          <div class="mantenimiento-title d-flex">
              <span class="text-success d-flex fs-5" >5696NKR</span>
              <span class="mx-1 text-success d-flex">13</span>
              <span class="mx-1">03</span>
              <span class="mx-1 fw-light">2022, Domingo</span>
          </div>

          <div class="mantenimiento-description">
              Adipisicing quis deserunt veniam nisi nostrud dolore. Laborum ullamco quis velit sit qui sint aliquip commodo ea ut amet Lorem culpa excepteur. Deserunt nisi proident amet duis sint in officia nostrud eu dolore aliquip. Adipisicing duis voluptate nulla eiusmod incididunt Lorem exercitation aute duis tempor labore culpa enim.
          </div>
      </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mantenimiento-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .mantenimiento-description{
        font-size: 12px
    }
}
</style>