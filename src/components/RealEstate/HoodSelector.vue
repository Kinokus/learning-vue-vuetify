<template>
  <div class="hood-selector pt-1 ma-4 mb-0">

    <label>
      <select
          v-model="selectedHood"
          @change="hoodSelect()"
      >
        <option disabled value="">Please select one</option>
        <option
            v-for="hood in hoods"
            v-bind:key="hood.hoodId + hood.hoodName"
            v-bind:value="hood">
          {{ hood.hoodName }}
        </option>
      </select>
    </label>
    <span> | </span>
    <span v-if="selectedHood">Selected: {{ selectedHood.hoodName }}</span>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedHood: null,
      errors: [],
    };
  },
  computed:
      mapState(['hoods']),

  methods: {
    async hoodSelect() {
      console.log(this.selectedHood);
      await this.$store.dispatch('fetchApartments', { hoodId: this.selectedHood.hoodId });
    },
  },

  name: 'HoodSelector',
};
</script>

<style scoped>

</style>
