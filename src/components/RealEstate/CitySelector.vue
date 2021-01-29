<template>
  <div class="city-selector">
    <label>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option
            v-for="city in cities"
            v-bind:key="city.cityId"
            v-bind:value="city">
          {{ city.cityName }}
        </option>
      </select>
    </label>
    <span> | </span>
    <span>Selected: {{ selected.cityName }}</span>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'CitySelector',
  data() {
    return {
      selected: '',
      // cities: [],
      errors: [],
    };
  },
  async created() {
    await this.$store.dispatch('fetchCities');
  },

  // todo or this one
  computed:
      mapState(['cities']),

  // todo or this one
  // computed:
  //     mapState({ cities: (state) => state.cities }),
};
</script>

<style scoped>

</style>
