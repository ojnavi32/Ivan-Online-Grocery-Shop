const baseUrl = `${process.env.apiUrl}/categories`

export const state = () => ({
  lists: null,
  sub_categories: null
})

export const mutations = {
  SET_CATEGORY_LISTS (state, { categories }) {
    state.lists = categories
  },
  SET_SUB_CATEGORIES (state, { children }) {
    state.sub_categories = children
  }
}

export const actions = {
  async FETCH_LISTS ({commit}) {
    const url = `${baseUrl}/lists`
    const { data } = await this.$axios.$get(url)
    commit('SET_CATEGORY_LISTS', data)
  },
  async FETCH_SUB_CATEGORIES ({commit}, { slug }) {
    const url = `${baseUrl}/children`
    const { data } = await this.$axios.$post(url, { slug: slug })

    commit('SET_SUB_CATEGORIES', data)
  },
  async FETCH_SUB_CATEGORIES_SUB ({commit}, sub_category) {
    const url = process.env.apiUrl + 'categories/sub-get-sub'
    await this.$axios.$post(url, {sub_category: sub_category.sub_category})
      .then(response => {
        commit('SET_SUB_CATEGORIES', response.data)
      })
  }
}