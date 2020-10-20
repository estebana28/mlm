<template>
  <v-app-bar app elevate-on-scroll prominent>
    <v-container>
      <div class="d-flex justify-space-between">
        <div class="align-self-center">
          <v-img width="225px" src="../assets/pictures/logo.png"></v-img>
        </div>

        <div class="align-self-center">
          <v-btn text class="appbar-btn" to="#">Inicio</v-btn>
          <v-btn text class="appbar-btn" to="/vision">Visión</v-btn>
          <v-btn text class="appbar-btn" to="/servicios">Servicios</v-btn>
          <v-btn text class="appbar-btn" to="/capacitaciones"
            >Capacitaciones</v-btn
          >
          <v-btn text class="appbar-btn" to="/contacto">Contacto</v-btn>
        </div>
        <div class="align-self-center d-inline-flex">
          <v-img
            width="25px"
            height="25px"
            class="mt-1 mr-2"
            src="../assets/pictures/tel.png"
          ></v-img>
          <p>0800-058-2050</p>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    components: {},
    props: {},
    data() {},
    methods: {},
    computed: {},
    watch: {},
    // Lifecycles
  }
</script>

<style lang="scss" scoped></style>
