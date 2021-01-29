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

      state.cities = payload.hoods;
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
  },
  getters: {
    cities: (state) => state.cities,
  },
  modules: {},
});
