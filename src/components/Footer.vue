<template>
  <v-footer app tile absolute>
    <v-card width="100%" class="footer-cls text-center" color="#3d84a8">
      <v-row class="d-flex justify-space-around">
        <v-col cols="5" class="d-flex align-self-center justify-center">
          <v-icon color="white">mdi-phone</v-icon>
          <h5 class="ml-2 text-h6 white--text">Llamanos: +54 4658-7600</h5>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="5" class="d-flex align-self-center justify-center">
          <v-btn text class="text-h6 white--text text-lowercase">
            <v-icon class="mr-2">mdi-email</v-icon>
            info@mlmenfermeria.com.ar
          </v-btn>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text text-h6">
        {{ new Date().getFullYear() }} —
        <strong>MLM Enfermeria Domiciliaria</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: '',
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

<style lang="scss" scoped></style>
