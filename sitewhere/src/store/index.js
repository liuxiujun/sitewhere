import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    authToken: null,
    authTenants: null,
    selectedTenant: null,
    currentSection: null
  },
  mutations: {
    // Set currently logged in user.
    user (state, user) {
      state.user = user
    },

    // Set authentication token for logged in user.
    authToken (state, token) {
      state.authToken = token
    },

    // Set list of authorized tenants.
    authTenants (state, tenants) {
      state.authTenants = tenants
    },

    // Set selected tenant.
    selectedTenant (state, selectedTenant) {
      state.selectedTenant = selectedTenant
    },

    // Set current app section.
    currentSection (state, section) {
      state.currentSection = section
    },

    // Log out of the application.
    logOut (state) {
      state.user = null
      state.authToken = null
      state.authTenants = null
      state.currentSection = null
    }
  },

  getters: {
    user: state => {
      return state.user
    },

    authToken: state => {
      return state.authToken
    },

    authTenants: state => {
      return state.authTenants
    },

    selectedTenant: state => {
      return state.selectedTenant
    },

    currentSection: state => {
      return state.currentSection
    }
  }
})
