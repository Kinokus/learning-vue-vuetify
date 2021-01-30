<template>
  <v-main class="city-selector">
    <label>
      <select
          v-model="selectedCity"
          @change="citySelect()"
      >
        <option disabled value="">Please select one</option>
        <option
            v-for="city in cities"
            v-bind:key="city.cityId + city.cityName"
            v-bind:value="city">
          {{ city.cityName }}
        </option>
      </select>
    </label>
    <span> | </span>
    <span v-if="selectedCity">Selected: {{ selectedCity.cityName }}</span>
  </v-main>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'CitySelector',
  data() {
    return {
      selectedCity: null,
      errors: [],
    };
  },
  async beforeCreate() {
    await this.$store.dispatch('fetchCities');
  },

  // todo or this one
  computed:
      mapState(['cities']),

  methods: {
    async citySelect() {
      console.log(this.selectedCity.cityName);
      await this.$store.dispatch('fetchHoods', { cityId: this.selectedCity.cityId });
    },
  },

  // todo or this one
  // computed:
  //     mapState({ cities: (state) => state.cities }),
};
</script>

<style scoped>

</style>
