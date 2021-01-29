<template>
  <div class="real-estate">
    <hr>
    <city-selector></city-selector>
    <hr>
    <hood-selector></hood-selector>
    <hr>
  </div>

</template>

<script>
import CitySelector from '../components/RealEstate/CitySelector.vue';
import HoodSelector from '../components/RealEstate/HoodSelector.vue';

export default {
  name: 'RealEstate',
  components: {
    HoodSelector,
    CitySelector,
  },
};
</script>

<style scoped>

</style>
