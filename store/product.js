const baseUrl = `${process.env.apiUrl}/products`

export const state = () => ({
  lists: null,
  best_sellers: null,
  hot_deals: null,
  by_category: null
})
  
export const mutations = {
  SET_PRODUCT_LISTS (state, lists) {
    state.lists = lists
  },
  SET_BEST_SELLERS (state, { lists }) {
    state.best_sellers = lists
  },
  SET_HOT_DEALS (state, { lists }) {
    state.hot_deals = lists
  },
  SET_BY_CATEGORY (state, { products }) {
    state.by_category = products
  }
}

export const actions = {
  async FETCH_BEST_SELLERS ({commit}) {
    const url = `${baseUrl}/best-sellers`
    const { data } = await this.$axios.$get(url)

    commit('SET_BEST_SELLERS', data)
  },
  async FETCH_HOT_DEALS ({commit}) {
    const url = `${baseUrl}/hot-deals`
    const { data } = await this.$axios.$get(url)

    commit('SET_HOT_DEALS', data)
  },
  async FETCH_BY_CATEGORY ({commit}, { slug, parent = false }) {
    const url = `${baseUrl}/by-category`
    const { data } = await this.$axios.$post(url, {
      slug: slug,
      parent: parent
    })

    commit('SET_BY_CATEGORY', data)
  }
}