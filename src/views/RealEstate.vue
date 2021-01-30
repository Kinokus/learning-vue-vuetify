<template>
  <div class="real-estate">
    <hr>
    <city-selector></city-selector>
    <hr>
    <hood-selector></hood-selector>
    <hr>
    <apartments-list></apartments-list>
    <hr>
  </div>

</template>

<script>
import CitySelector from '@/components/RealEstate/CitySelector.vue';
import HoodSelector from '@/components/RealEstate/HoodSelector.vue';
import ApartmentsList from '@/components/RealEstate/ApartmentsList.vue';

export default {
  name: 'RealEstate',
  components: {
    ApartmentsList,
    HoodSelector,
    CitySelector,
  },
};
</script>

<style scoped>

</style>
