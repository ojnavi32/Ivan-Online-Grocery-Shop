export const strict = false

export const state = () => ({
  showModal: false,
  authForm: 'login'
})

export const getters = {
  showModal: state => state.showModal,
  authForm: state => state.authForm,
}

export const mutations = {
  setShowModal (state, condition) {
    state.showModal = condition
  },
  setAuthForm (state, form) {
    state.authForm = form
  }
}

export const actions = {
  async nuxtServerInit ({dispatch}) {
    await dispatch('category/FETCH_LISTS')
  }
}