<template>
  <v-container class="ma-0">
    <v-img class="img-home" src="../assets/pictures/couple.jpg"></v-img>
    <section class="mt-10 mx-2">
      <h1 class="my-8 text-center text-h2">¿ Quienes Somos ?</h1>
      <p class="who-text text-center">
        <span>MLM ENFERMERIA DOMICILIARIA</span><br />
        es una empresa joven que busca mejorar la calidad de vida de todos los
        pacientes que requieran de nuestros servicios, empleando un plan de
        cuidados de enfermería, basado en la empatía, el respeto y la privacidad
        que todos y cada uno de nuestros pacientes se merecen.
      </p>
    </section>
  </v-container>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {},
    data() {},
    methods: {},
    computed: {},
    watch: {},
    // Lifecycles
  }
</script>

<style lang="scss" scoped>
  .img-home {
    height: 60vh;
  }
  .who-text {
    font-size: 2rem;
  }
</style>
