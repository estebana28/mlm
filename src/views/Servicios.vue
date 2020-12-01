<template>
  <div>
    <v-container>
      <section>
        <h1 class="text-center text-h1 my-8">Servicios</h1>
        <v-row>
          <v-col class="col-3 offset-2">
            <div class="service-img text-center"></div>
          </v-col>
          <v-col class="offset-1 col-4">
            <ul v-for="service in services" :key="service.title">
              <li class="mb-1">{{ service.title }}</li>
            </ul>
          </v-col>
        </v-row>
      </section>
      <section class="equip-container d-flex flex-column">
        <h1 class="text-center text-h1 my-8">Equipamiento</h1>
        <v-row>
          <v-col class="col-3 offset-2">
            <ul v-for="equip in equipment" :key="equip.title">
              <li class="mb-1">{{ equip.title }}</li>
            </ul>
          </v-col>
          <v-col class="col-4 offset-1">
            <div class="equip-img"></div>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Servicios',
    components: {},
    props: {},
    data() {
      return {
        services: [
          { title: 'Guardias de 12hs' },
          { title: 'Guardias de 8hs' },
          { title: 'Guardias de 6 y 4hs' },
          { title: 'Prestaciones domiciliarias' },
          { title: 'Asistencia eventual' },
          { title: 'Auditoría de coordinadores de enfermería permanente' },
          { title: 'Atención de enfermería domiciliaria' },
          { title: 'Licenciados en enfermería' },
          { title: 'Enfermeros profesionales' },
          { title: 'Auxiliares de  enfermería' },
          { title: 'Cuidados en enfermería pediátrica' },
          { title: 'Cuidadores' },
          { title: 'Aspiración de secreciones' },
          { title: 'Electrocardiograma' },
          { title: 'Recambio y colocación de sonda vesical' },
          { title: 'Asistencia completa a pacientes sin movilidad propia' },
          { title: 'Higiene y confort' },
          { title: 'Administración de medicamentos' },
          { title: 'Nutrición enteral y parenteral' },
          { title: 'Nebulizaciones' },
          { title: 'Curación de heridas' },
          { title: 'Curación de escaras' },
          { title: 'Recambio de cánula de colonostomía' },
          { title: 'Control de signos vitales' },
        ],
        equipment: [
          { title: 'Bombas de infusión continua' },
          { title: 'Tubos de oxigeno' },
          { title: 'Colchón anti-escara' },
          { title: 'Pie de suero' },
          { title: 'Electrocardiograma' },
          { title: 'Aspirador de secreciones' },
          { title: 'Nebulizador' },
        ],
      }
    },
    methods: {},
    computed: {},
    watch: {},
    // Lifecycles
  }
</script>

<style lang="scss" scoped>
  .service-img {
    background-image: url('../assets/pictures/services.jpg');
    background-size: contain;
    width: 100%;
    height: 100%;
  }

  .equip-container {
    height: 500px;
  }
  .equip-img {
    background-image: url('../assets/pictures/equipment.jpg');
    background-size: contain;
    width: 100%;
    height: 100%;
  }

  h1,
  li {
    color: #48466d;
  }
</style>
