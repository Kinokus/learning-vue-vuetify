<template>
  <v-content class="nav-header">
    <v-container d-flex>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about" class="accent-4">About</router-link>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-header {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
