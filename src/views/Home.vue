<template>
  <div>
    <v-img class="img-home" src="../assets/pictures/couple.jpg"></v-img>
    <v-container class="ma-0">
      <h1 class="text-center text-h1 my-16">Welcome</h1>
      <p class="text-center text-h4 mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure
        ad reprehenderit eveniet quam numquam debitis omnis vero eligendi
        assumenda quis corrupti laborum ipsa animi sit, repellat consectetur
        veniam repudiandae totam perspiciatis dolores impedit, ea atque? Nam
        quam et laborum enim sed repudiandae earum! Perspiciatis quisquam
        cupiditate aperiam dolorum dicta, voluptatem possimus ullam harum illum
        nisi maxime quaerat repellendus cum.
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
