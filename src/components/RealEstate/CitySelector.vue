<template>
  <div class="city-selector pa-2 ma-4 mb-0 rounded-xl">
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
    <!--    <span> | </span>-->
    <!--    <span v-if="selectedCity">Selected: {{ selectedCity.cityName }}</span>-->
  </div>
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
  // computed: {
  //
  //   //...mapState(['cities']),
  //
  // }
  computed: mapState({
    cities: (state) => state.cities,
    // selectedCityLocal: {
    //   get() {
    //     return this.$store.getters.selectedCity();
    //   },
    //
    //   set(city) {
    //     this.$store.commit('setSelectedCity', { city });
    //   },
    // },
  }),

  methods: {
    async citySelect() {
      await this.$store.commit('setSelectedHood', { hood: null });
      await this.$store.dispatch('fetchHoods', { cityId: this.selectedCity.cityId });
      await this.$store.commit('setSelectedCity', { city: this.selectedCity });
      await this.$store.commit('setApartments', { apartments: [] });
    },
  },

  // todo or this one
  // computed:
  //     mapState({ cities: (state) => state.cities }),
};
</script>

<style scoped lang="scss">
@import "../../assets/base-styles.scss";
</style>
