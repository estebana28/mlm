<template>
  <div>
    <h1 class="text-center text-h1 primary--text mt-10">Contacto</h1>
    <v-row class="mt-10">
      <v-col cols="6" class="d-flex justify-center mt-5">
        <v-form>
          <v-text-field
            outlined
            label="Nombre"
            placeholder="Ingrese su nombre"
            class="input-field"
          ></v-text-field>
          <v-text-field
            outlined
            label="Asunto"
            placeholder="Ingrese su motivo de consulta"
            class="input-field"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            placeholder="Ingrese su email"
            class="input-field"
          ></v-text-field>
          <v-text-field
            outlined
            label="Telefono"
            placeholder="Ingrese su telefono de contacto"
            class="input-field"
          ></v-text-field>
          <v-textarea
            outlined
            label="Detalle"
            placeholder="Detalle su consulta"
            class="input-field"
          ></v-textarea>
        </v-form>
      </v-col>
      <v-col cols="6" class="mt-5">
        <div class="d-flex flex-column">
          <h2 class="text-h4 mb-5 primary--text">Nos encantaría conocerte</h2>
          <p class="text-subtitle-1">Nos encontramos en:</p>
          <p class="text-h6 primary--text">"Direccion del local"</p>
          <p class="text-subtitle-1">Telefono:</p>
          <p class="text-h6 primary--text">0800 000 0000</p>
          <p class="text-subtitle-1">Email:</p>
          <p class="text-h6 primary--text">info@mlmenfermeria.com.ar</p>
          <p></p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Contacto',
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
  .input-field {
    min-width: 400px;
  }
</style>
