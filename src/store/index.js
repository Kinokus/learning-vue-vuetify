import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],

    cities: [],
    hoods: [],
    apartments: [],

    selectedCity: null,
    selectedHood: null,
  },
  mutations: {
    setCities(state, payload) {
      if (payload.error) {
        state.errors.push(payload.error);
        return;
      }
      state.cities = payload.cities;
    },
    setHoods(state, payload) {
      if (payload.error) {
        state.errors.push(payload.error);
        return;
      }

      state.hoods = payload.hoods;
    },
    setApartments(state, payload) {
      if (payload.error) {
        state.errors.push(payload.error);
        return;
      }

      state.apartments = payload.apartments;
    },

    setSelectedCity(state, payload) {
      if (payload.error) {
        state.errors.push(payload.error);
        return;
      }
      state.selectedCity = payload.selectedCity;
    },
    setSelectedHood(state, payload) {
      if (payload.error) {
        state.errors.push(payload.error);
        return;
      }
      state.selectedCity = payload.selectedCity;
    },
  },
  actions: {
    fetchCities({ commit }) {
      try {
        axios.get('https://yad2.ngrok.io/city')
          .then((response) => {
            commit('setCities', { cities: response.data });
          });
      } catch (e) {
        // todo error codes enum
        commit('setCities', { error: 'fetch failed' });
      }
    },
    fetchHoods({ commit }, payload) {
      try {
        //
        axios.get(`https://yad2.ngrok.io/hood/city/${payload.cityId}`)
          .then((response) => {
            commit('setHoods', { hoods: response.data });
          });
      } catch (e) {
        // todo error codes enum
        commit('setHoods', { error: 'fetch failed' });
      }
    },
    fetchApartments({ commit }, payload) {
      try {
        //
        axios.get(`https://yad2.ngrok.io/apartment/hood/${payload.hoodId}`)
          .then((response) => {
            commit('setApartments', { apartments: response.data });
          });
      } catch (e) {
        // todo error codes enum
        commit('setApartments', { error: 'fetch failed' });
      }
    },

  },
  getters: {
    cities: (state) => state.cities,
    hoods: (state) => state.hoods,
    apartments: (state) => state.apartments,
    selectedCity: (state) => state.selectedCity,
    selectedHood: (state) => state.selectedHood,
  },

});
