<template>
  <div class="header-top-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-6">
          <div class="top-bar-left">
            <!-- welcome -->
            <div class="welcome">
              <p>Pampanga's First Online Grocery Store</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="topbar-nav">
            <div class="wpb_wrapper">
              <!-- my account -->
              <div v-if="customer" class="menu-my-account-container">
                <a href="#">My Account <i class="ion-ios-arrow-down"></i></a>
                <ul>
                    <li><a href="login.html">My Account</a></li>
                    <li><a href="contact-us.html">Contact</a></li>
                    <li><a href="cart.html">Shopping cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </div>
              <div v-else class="menu-my-account-container">
                <a href="#" @click="showLoginForm()">LOGIN</a> or <a href="#">SIGN UP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <auth-form></auth-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthForm from '@c/auth/form.vue'

export default {
  components: { AuthForm },
  methods: {
    showLoginForm () {
      this.$store.commit('setShowModal', true)
    }
  },
  computed: mapGetters({
    customer: 'customer/customer'
  })
}
</script>