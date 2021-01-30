<template>
  <div class="apartments-list pt-0">
    <v-container>
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
        <template v-slot:item.street="{ item }">
          <div class="d-flex">
            <span>{{ item.street }}</span>
            <span class="ms-2 me-2">{{ item.home }}</span>
            <a
                class="ms-2 flex-grow-1 text-right"
                v-if="item.coordinates"
                v-bind:href="getLink(item)"
                target="_blank">
              map
            </a>
          </div>
        </template>

      </v-data-table>
    </v-container>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {

  data() {
    return {
      errors: [],
      headers: [
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
          text: 'Rooms',
          align: 'start',
          sortable: 'true',
          value: 'rooms',
        },
        // {
        //   text: '',
        //   align: 'start',
        //   sortable: 'true',
        //   value: 'home',
        // },
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
    getLink(apartment) {
      return `https://www.google.com/maps/place/${apartment.coordinates.latitude},${apartment.coordinates.longitude}`;
    },
  },

  name: 'ApartmentsList',
};
</script>

<style scoped>
@import "../../assets/customColors.scss";
</style>
