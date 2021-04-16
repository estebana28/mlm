<template>
  <div>
    <h1 class="text-center text-h2 text-md-h1 mt-10">Contacto</h1>
    <v-row class="mt-10">
      <v-col
        class="d-flex flex-column justify-center align-center mt-5 col-12 col-md-6"
      >
        <v-form>
          <v-text-field
            autofocus
            outlined
            label="Nombre"
            placeholder="Ingrese su nombre"
            class="input-field text-h6"
            color="#3d84a8"
          ></v-text-field>
          <v-text-field
            outlined
            label="Asunto"
            placeholder="Ingrese su motivo de consulta"
            class="input-field text-h6"
            color="#3d84a8"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            placeholder="Ingrese su email"
            class="input-field text-h6"
            color="#3d84a8"
          ></v-text-field>
          <v-text-field
            outlined
            label="Telefono"
            placeholder="Ingrese su telefono de contacto"
            class="input-field text-h6"
            color="#3d84a8"
          ></v-text-field>
          <v-textarea
            outlined
            label="Detalle"
            placeholder="Detalle su consulta"
            class="input-field text-h6"
            color="#3d84a8"
          ></v-textarea>
        </v-form>
      </v-col>
      <v-col class="mt-5 col-12 col-md-6 pb-16">
        <div class="d-flex flex-column">
          <h2 class="text-h4 mb-5">Nos encantaría conocerte</h2>
          <p class="text-subtitle-1">Nos encontramos en:</p>
          <p class="text-h6 font-weight-bold lightBlue">
            "Direccion del local"
          </p>
          <p class="text-subtitle-1">Telefono:</p>
          <p class="text-h6 font-weight-bold lightBlue">0800 000 0000</p>
          <p class="text-subtitle-1">Email:</p>
          <p class="text-h6 font-weight-bold lightBlue">
            info@mlmenfermeria.com.ar
          </p>
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
    min-width: 330px;
  }

  h1,
  h2,
  p {
    color: #48466d;
  }

  input {
    color: #3d84a8;
  }

  .lightBlue {
    color: #3d84a8;
  }
</style>
