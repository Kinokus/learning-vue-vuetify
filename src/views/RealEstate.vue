<template>
  <div class="real-estate ">
    <v-row>
      <v-col><city-selector></city-selector></v-col>
      <v-col><hood-selector></hood-selector></v-col>
      <v-col><Filters></Filters></v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col clas="pa-0 ma-0"><apartments-list></apartments-list></v-col>
    </v-row>
  </div>

</template>

<script>
import CitySelector from '@/components/RealEstate/CitySelector.vue';
import HoodSelector from '@/components/RealEstate/HoodSelector.vue';
import ApartmentsList from '@/components/RealEstate/ApartmentsList.vue';
import Filters from '@/components/RealEstate/Filters';

export default {
  name: 'RealEstate',
  components: {
    ApartmentsList,
    HoodSelector,
    CitySelector,
    Filters,
  },
  async beforeCreate() {
    await this.$store.commit('setApartments', { apartments: [] });
    await this.$store.commit('setHoods', { hoods: [] });
  },

};
</script>

<style scoped>

</style>
