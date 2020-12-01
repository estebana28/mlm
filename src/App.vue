<template>
  <!-- App.vue -->
  <v-app>
    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
  import AppBar from './components/AppBar'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      AppBar,
      Footer,
    },
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

<style lang="scss">
  body {
    background-color: #e8e8e8;
  }
</style>
