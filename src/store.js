import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: '',
  },
  mutations: {
    SET_USER_NAME(state, newName) {
      state.userName = newName;
    },
  },
  actions: {
    setUserName({ commit }, newName) {
      commit('SET_USER_NAME', newName);
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
