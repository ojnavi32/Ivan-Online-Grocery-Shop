<template>
<div style="width: 100%">
  <div v-if="added === false" class="add-to-cart"> 
    <a @click="add"><i class="fa fa-shopping-cart"></i> Add to cart</a>
  </div>
  <div v-else class="minusplusnumber">
    <div @click="updateValue('minus')" class="mpbtn minus">
      <i class="fa fa-minus"></i>
    </div>
    <div id="field_container">
      <input type="text" @change="updateProductQuantity(product_quantity)" v-model="product_quantity">
    </div>
    <div @click="updateValue('plus')" class="mpbtn plus">
      <i class="fa fa-plus"></i>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cart-add',
  props: ['product'],
  computed: {
    ...mapGetters({
          cart: 'cart/products',
    }),
    added () {
      if (this.cart.length === 0) return false

      let add = false
      let prod = this.findProductInCart.id

      if (prod === this.product.id) {
        add = true
      }

      return add
    },
    findProductInCart () {
      const self = this
      const index = this.cart.findIndex(prod => prod.id === self.product.id)

      return this.cart[index]
    }
  },
  data () {
    return {
      product_quantity: (typeof this.$store.getters['cart/productById'](this.product.id) == 'undefined') 
                          ? 1 : this.$store.getters['cart/productById'](this.product.id).quantity
    }
  },
  methods: {
    add () {
      this.product.quantity = 1
      this.$store.commit('cart/ADD_PRODUCT_TO_CART', this.product)
    },
    updateValue (method) {
      let value = this.findProductInCart.quantity

      if (method === 'plus') {
        value++
        this.updateProductQuantity(value)
        return
      }
      
      if (method === 'minus' && value > 1) {
        value -= 1
        this.updateProductQuantity(value)
        return
      } else {
        this.$store.commit('cart/REMOVE_PRODUCT_TO_CART', this.product.ID)
      }
    },
    updateProductQuantity (value) {
      this.product_quantity = value

      this.product.quantity = value
      this.$store.commit('cart/UPDATE_PRODUCT_QUANTITY', this.product)
    }
  }
}
</script>

<style scoped>
.minusplusnumber div {
    display: inline-block;
}
.minusplusnumber {
    border-radius: 5px;
    background-color: #FFF;
    margin: 0 5px 0 5px;
    display: inline-block;
    user-select: none;
}
.minusplusnumber .mpbtn {
    padding: 3px 10px 3px 10px;
    cursor: pointer;
    border-radius: 5px;
}
.minusplusnumber #field_container input {
    width: 60px;
    text-align: center;
    font-size: 15px;
    padding: 3px;
}
.minusplusnumber .mpbtn {
    padding: 3px 10px 3px 10px;
    cursor: pointer;
    border-radius: 5px;
}
.add-to-cart a {
    cursor: pointer;
}
</style>
