const baseUrl = `${process.env.apiUrl}/customers`

export const state = () => ({
  customer: null
})

export const getters = {
  customer: state => state.customer
}

export const mutations = {
  SET_CUSTOMER (state, { customer }) {
    state.customer = customer
  }
}

export const actions = {
  async initialize ({ commit }) {
    const { data } = await this.$axios.$get(`${baseUrl}/initialize`)
    commit('SET_CUSTOMER', data)
  }
}