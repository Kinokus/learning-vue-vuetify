<template>
  <div class="filters d-flex">

    <v-text-field
        class="flex-grow-1 flex-shrink-1"
        v-model="maxPrice"
        label="max price"
        hide-details="auto"
    ></v-text-field>

    <v-text-field
        class="flex-grow-1 flex-shrink-1"
        v-model="minRooms"
        label="min rooms"
        hide-details="auto"
    ></v-text-field>

    <v-checkbox
        v-model="notMerchant"
        label="not merchant"
    ></v-checkbox>

    <button class="flex-grow-1 flex-shrink-1" v-on:click="filterApartments()">Filter</button>
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
    minRooms: {
      get() {
        return this.$store.state.minRooms;
      },
      set(value) {
        this.$store.commit('setMinRooms', { minRooms: value });
      },
    },
    notMerchant: {
      get() {
        return this.$store.state.notMerchant;
      },
      set(value) {
        this.$store.commit('setNotMerchant', { notMerchant: value });
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
