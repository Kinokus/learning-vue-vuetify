<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <router-link
            v-for="(route, index) in routes"
            v-bind:to="route.path.length ? route.path : '/'"
            v-bind:key="route.path"
            v-bind:tooltip="index"
        >
          {{ route.name }}
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import router from '@/router/index';
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  created() {
    this.routes = router.getRoutes();
    console.log(this.routes);
  },

  data: () => ({
    //
  }),
};
</script>
