<template>
  <div class="filters">
    <v-input v-model="a"></v-input>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  computed: {
    a: {
      get() {
        return this.$store.state.a;
      },
      set(value) {
        this.$store.commit('updateA', value);
      },
    },
  },
};

</script>

<style scoped>

</style>
