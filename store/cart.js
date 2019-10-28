function getProductInCartById (state, id) {
  return state.products.find(product => product.id === id)
}

export const state = () => ({
  products: []
})

export const getters = {
  products: state => state.products,
  productById: (state) => (id) => {
    return getProductInCartById(state, id)
    // return state.products.find(product => product.id === id)
  }
}

export const mutations = {
  ADD_PRODUCT_TO_CART (state, product) {
    state.products.push(product)
  },
  UPDATE_PRODUCT_QUANTITY (state, product) {
    const index = state.products.findIndex(prod => prod.id === product.id)
    if (index !== -1) {
      state.products[index].quantity = product.quantity
    }
  },
  REMOVE_PRODUCT_TO_CART (state, id) {
    let arr = state.products
    let index = -1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].ID === id) {
        index = i
      }
    }

    if (index !== -1) arr.splice(index, 1)
  },
  RESET_PRODUCT (state) {
    state.products = []
  }
}