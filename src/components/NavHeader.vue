<template>
  <v-main class="nav-header">
    <v-container class="pa-1">

      <router-link
          v-for="(route, index) in routes"
          v-bind:to="route.path.length ? route.path : '/'"
          v-bind:key="route.path"
          v-bind:tooltip="index"
      >
        {{ route.name }}
      </router-link>
      <!--      <router-link to="/">Home</router-link>-->
      <!--      |-->
      <!--      <router-link to="/about" class="accent-4">About</router-link>-->
      <!--      |-->
      <!--      <router-link to="/realEstate" class="accent-4">Real Estate</router-link>-->
    </v-container>
  </v-main>
</template>

<script>
import router from '../router/index';

export default {

  name: 'NavHeader',
  props: {
    // routes: router.getRoutes(),
  },
  created() {
    this.routes = router.getRoutes();
    console.log(this.routes);
  },
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

    &:not(:last-child){
      &:after{
        content: ' | ';
      }
    }

  }

}
</style>
