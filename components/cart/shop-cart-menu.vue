<template>
  <div class="shop-cart-menu pull-right">
    <ul>
      <li>
        <a href="#">
          <span class="cart-icon">
            <i class="i fa fa-shopping-bag"></i><sup>{{ cart_count }}</sup>
          </span>
          <span class="cart-text">
            <span class="cart-text-title">My cart <br> <strong>₱ {{ cart_total }}</strong> </span>
          </span>
        </a>
        <ul>
          <li 
              v-for="(prod, key) in cart_products"
              :key="key"
          >
              <!-- single-shop-cart-wrapper -->
              <shop-cart-menu-item 
                :product="prod"
              ></shop-cart-menu-item>
          </li>
          <li>
              <!-- shop-cart-total -->
              <div class="shop-cart-total">
                  <p>Subtotal: <span class="pull-right">{{ cart_total }}</span></p>
              </div>
          </li>
          <li>
              <div class="shop-cart-btn">
                  <a href="/cart">Checkout</a>
              </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopCartMenuItem from './shop-cart-menu-item'

export default {
  components: {
    ShopCartMenuItem
  },
  computed: {
    ...mapGetters({
      cart_products: 'cart/products'
    }),
      cart_count () {
          return this.cart_products.length
      },
      cart_total () {
          let sum = 0
          _.forEach(this.cart_products, (item) => {
              let price = item.price * item.quantity
              sum += price
          })
          return sum
          // return this.formatPrice(sum)
      }
  },
    methods: {
      product_quantity (id) {
        return this.$store.getters['cart/productById'](id).quantity
      },
        computeProductTotal (id) {
            // const prod = this.$store.dispatch('cart/getPriceTotal', id)
            // console.log(prod)
            // let total = price * quantity
            // return total
            // return this.formatPrice(total)
        }
    }
}
</script>

<style scoped>
.home-three .shop-cart-btn a {
    width: 100%;
    text-align: center;
    background: #ff6f60;
    color: #ffffff;
}
</style>