<template>
  <v-app-bar app elevate-on-scroll height="75px">
    <v-toolbar class="d-flex justify-center" elevation="0" height="75px">
      <!-- <div class="align-self-center hidden-md-and-down">
        <v-img width="225px" src="../assets/pictures/logo.png"></v-img>
      </div> -->

      <v-toolbar-items class="hidden-sm-and-down align-self-center">
        <v-btn
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          class="text-capitalize text-h6"
          text
          ripple
          color="#48466d"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>

      <v-menu
        offset-y
        transition="slide-x-transition"
        bottom
        right
        close-on-click
      >
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
            v-on="on"
            class="hidden-md-and-up mt-3"
          ></v-app-bar-nav-icon>
        </template>
        <v-list dense>
          <v-list-item
            v-for="item in menu"
            :key="item.title"
            router
            :to="item.link"
            class="appbar-btn"
          >
            <v-list-item-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="ml-16  hidden-md-and-down d-flex align-items-center">
        <!-- <v-img
          width="25px"
          height="25px"
          class="mt-1 mr-2"
          src="../assets/pictures/tel.png"
        ></v-img> -->
        <v-icon class="mr-3" color="#48466d">mdi-phone</v-icon>
        <p class="text-h4 mt-3 font-weight-black phone-num">0800-058-2050</p>
      </div>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppBar',
    components: {},
    props: {},
    data() {
      return {
        drawer: false,
        menu: [
          { link: '/', title: 'Inicio' },
          { link: '/vision', title: 'Vision' },
          { link: '/servicios', title: 'Servicios' },
          { link: '/capacitaciones', title: 'Capacitaciones' },
          { link: '/contacto', title: 'Contacto' },
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
  .appbar-btn,
  .phone-num {
    color: #46cdcf;
  }
</style>
