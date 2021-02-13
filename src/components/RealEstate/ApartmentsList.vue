<template>
  <div class="apartments-list pt-0">
    <v-container v-if="apartments" class="d-flex width-100">
      <v-data-table
          :headers="headers"
          :items="apartments"
          class="flex-grow-1"
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
        <template v-slot:item.photos="{ item }">
          <img
              class="ma-1"
              v-for="(img, idx) in item.photos"
              v-on:click="showGallery(item)"
              :src="img"
              :key="idx"
              width="32" height="32"
              :alt="item">

        </template>

      </v-data-table>
      <LightBox
          v-if="!!media"
          ref="lightbox"
          :media="media"
      >
      </LightBox>
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
        {
          text: '!',
          align: 'start',
          sortable: 'true',
          value: 'photos',
        },
      ],
      media: null,
      showLightbox: false,
    };
  },
  comments: {},
  computed:
      mapState(['apartments']),

  created() {
    this.$refs.lightbox.closeLightBox();
  },

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
    showGallery(apartment) {
      this.media = apartment.photos.map((ph) => ({ // For image
        thumb: ph,
        src: ph,
      }));

      this.$refs.lightbox.showImage(0);
    },
    hideLightbox() {
      this.$refs.lightbox.closeLightBox();
    },
  },

  name: 'ApartmentsList',
};
</script>

<style scoped>
@import "../../assets/customColors.scss";
@import "../../assets/base-styles.scss";

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  height: 36px !important;
  border: 1px solid gray;
}
</style>
