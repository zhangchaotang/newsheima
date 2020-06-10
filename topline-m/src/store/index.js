import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    useData: sessionStorage.getItem('token')
  },
  mutations: {
    setUseData (state, data) {
      state.useData = data
    }
  },
  actions: {
    setUseDataAsync (context, data) {
      context.commit('setUseData', data)
    }
  },
  modules: {
  }
})
