'use strict'

import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    messageFromState: 'hello from vuex!',
    employees: []
  },
  getters: {
    messageGetter: (state) => {
      return state.messageFromState.toUpperCase();
    },
    getEmployees: (state) => {
      return state.employees;
    }
  },
  actions: {
    updateMessage: (state, payload) => {
      state.commit('updateMessage', payload);
    },
    getEmployees: (state) => {
      console.log('getting');

      axios.get('http://127.0.0.1:3000/all/')
        .then((results) => {
          console.log(results.data);
          state.commit('getEmployees', results.data)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.messageFromState += payload;
    },
    getEmployees: (state, payload) => {
      console.log('getting employees');
      state.employees = payload
    }
  }
})

export default store;
