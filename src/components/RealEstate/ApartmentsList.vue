<template>
  <v-main class="apartments-list">
    <v-data-table
        :headers="headers"
        :items="apartments"
    >
      <template v-slot:item.price="{ item }">
        <v-chip
            :class="getColorClass(item)"
            light
        >
          {{ item.price }}
        </v-chip>
      </template>

    </v-data-table>
  </v-main>
</template>

<script>

import { mapState } from 'vuex';

export default {

  data() {
    return {
      errors: [],
      headers: [
        // {
        //   text: 'link_token',
        //   align: 'start',
        //   sortable: 'true',
        //   value: 'link_token',
        // },
        // {
        //   text: 'City',
        //   align: 'start',
        //   sortable: 'true',
        //   value: 'city',
        // },
        {
          text: 'Price',
          align: 'start',
          sortable: 'true',
          value: 'price',
        },
        {
          text: 'Address',
          align: 'start',
          sortable: 'true',
          value: 'street',
        },
        {
          text: '',
          align: 'start',
          sortable: 'true',
          value: 'home',
        },
      ],
    };
  },
  computed:
      mapState(['apartments']),

  methods: {
    getColorClass(apartment) {
      // return apartment.headers.
      // console.log(apartment);
      const color = apartment.merchant ? 'red' : 'green';
      console.log(color);
      return color;
    },
  },

  name: 'ApartmentsList',
};
</script>

<style scoped>
@import "../../assets/customColors.scss";
</style>
