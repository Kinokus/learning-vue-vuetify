<template>
  <div class="filters">
    <label>
      Max price
      <input v-model="maxPrice">
    </label>
    <button v-on:click="filterApartments()">Filter</button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  computed: {
    maxPrice: {
      get() {
        return this.$store.state.maxPrice;
      },
      set(value) {
        this.$store.commit('setMaxPrice', { maxPrice: value });
      },
    },
  },
  methods: {
    async filterApartments() {
      await this.$store.dispatch(
        'fetchApartments',
        { hoodId: this.$store.state.selectedHood.hoodId },
      );
    },
  },
};

</script>

<style scoped>

</style>
