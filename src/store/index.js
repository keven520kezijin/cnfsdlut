import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  actions,
  getters,
  state,
  mutations,
})

export default store
