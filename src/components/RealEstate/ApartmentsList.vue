<template>
  <div class="apartments-list pt-0">
    <v-container v-if="apartments">
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
                target="_blank"
                :title="getTitle(item)"
            >
              map
            </a>
          </div>
        </template>
        <template v-slot:item.rooms="{ item }">
          <span>
            {{ item.rooms }}
          </span>
          <span class="text--disabled">
            ~ {{ Math.round(item.price / item.rooms) }} for room
          </span>
        </template>
        <template v-slot:item.meters="{ item }">
          <span>
            {{ item.meters }}
          </span>
          <span class="text--disabled">
             ~ {{ Math.round(item.price / item.meters) }} per meter
          </span>
        </template>

        <template v-slot:item.floor="{ item }">
          <div
              class="flex align-center justify-center"
              v-bind:class="{'text--accent-1':item.floor === item.floors}">
          <span>
            {{ item.floor }} / {{ item.floors }}
          </span>
            <v-icon aria-hidden="false" v-if="item.elevator" class="text--disabled">
              mdi-elevator
            </v-icon>
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
        {
          text: 'Meters',
          align: 'start',
          sortable: 'true',
          value: 'meters',
        },
        {
          text: 'Floor',
          align: 'start',
          sortable: 'true',
          value: 'floor',
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
      if (apartment.coordinates.latitude) {
        return `https://www.google.com/maps/place/${apartment.coordinates.latitude},${apartment.coordinates.longitude}`;
      }
      return `https://www.google.com/maps/place/${apartment.city},${apartment.street},${apartment.home}`;
    },
    getTitle(apartment) {
      return `
      ${apartment.city}
      ${apartment.hood}
      ${apartment.street}
      ${apartment.home}
      ${apartment.coordinates.latitude},${apartment.coordinates.longitude}
      `;
    },
  },

  name: 'ApartmentsList',
};
</script>

<style scoped>
@import "../../assets/customColors.scss";

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  height: 36px !important;
  border: 1px solid gray;
}
</style>
