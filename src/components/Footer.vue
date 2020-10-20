<template>
  <v-footer app tile absolute>
    <v-container>
      <v-card width="100%" class="red text-center">
        <v-row class="d-flex justify-spacearound">
          <v-col cols="4" class="d-flex align-self-center justify-center">
            <v-icon color="white">mdi-phone</v-icon>
            <h5 class="ml-2 white--text">Llamanos: +54 4658-7600</h5>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="4" class="d-flex align-self-center justify-center">
            <v-btn text class="white--text">
              <v-icon class="mr-2">mdi-email</v-icon>
              info@mlmenfermeria.com.ar
            </v-btn>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>MLM Enfermeria Domiciliaria</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
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

<style lang="scss" scoped></style>
