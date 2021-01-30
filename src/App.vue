<template>
  <div id="app">
    <NavHeader></NavHeader>
    <router-view/>
  </div>
</template>

<script>

import NavHeader from '@/components/NavHeader.vue';

export default {
  name: 'Home',
  components: {
    NavHeader,
  },
};

</script>

<style lang="scss">
@import "../node_modules/vuetify/dist/vuetify.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
