import Cookies from 'js-cookie'

export const state = () => ({
  access_token: Cookies.get('access_token')
})

export const getters = {
  access_token: state => state.access_token
}

export const mutations = {
  SET_ACCESS_TOKEN (state, token) {
    state.access_token = token
  }
}

export const actions = {
  SET_ACCESS_TOKEN ({ commit }, token) {
    commit('SET_ACCESS_TOKEN', token)
  },
  async LOGIN_NORMAL (ctx, payload) {
    const data = await this.$axios.$post(`${process.env.baseApiUrl}/oauth/token`, payload)
    return data
   }
}