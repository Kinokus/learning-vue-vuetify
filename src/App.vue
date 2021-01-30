<template>
  <div id="app">
    <NavHeader></NavHeader>
    <router-view/>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import NavHeader from '@/components/NavHeader';

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
