<template>
  <div class="hood-selector pa-2 ma-4 mb-0 rounded-xl flex">

    <label class="flex flex-grow-1">
      <select
          class="flex-grow-1"
          v-model="selectedHood"
          @change="hoodSelect()"
      >
        <option disabled value="">Please select one</option>
        <option
            v-for="(hood, index) in hoods"
            v-bind:key="hood.hoodId + hood.hoodName + index"
            v-bind:value="hood">
          {{ hood.hoodName }} [{{ hood.hoodId }}]
        </option>
      </select>
    </label>
    <!--    <span> | </span>-->
    <!--    <span v-if="selectedHood">Selected: {{ selectedHood.hoodName }}</span>-->

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
      await this.$store.commit('setSelectedHood', { hood: this.selectedHood });
    },
  },

  name: 'HoodSelector',
};
</script>

<style lang="scss" scoped>
@import "../../assets/base-styles.scss";
</style>
