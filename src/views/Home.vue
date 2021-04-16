<template>
  <div class="pb-16">
    <v-img class="img-home" src="../assets/pictures/couple.jpg"></v-img>
    <v-container class="ma-0">
      <h1 class="text-center text-h2 text-md-h1 my-16">¿Quienes Somos?</h1>
      <p class="text-center text-h4 mt-5 mb-10">
        <span class="font-weight-black">MLM ENFERMERIA DOMICILIARIA</span> es
        una empresa joven que busca mejorar la calidad de vida de todos los
        pacientes que requieran de nuestros servicios, empleando un plan de
        cuidados de enfermería, basado en la empatía, el respeto y la privacidad
        que todos y cada uno de nuestros pacientes se merecen.
      </p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    props: {},
    data() {
      return {}
    },
    methods: {},
    computed: {},
    watch: {},
    // Lifecycles
  }
</script>

<style lang="scss" scoped>
  .img-home {
    height: 65vh;
  }
  h1,
  p {
    color: #48466d;
  }
</style>
