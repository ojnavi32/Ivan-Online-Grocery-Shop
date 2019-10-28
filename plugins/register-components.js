import Vue from 'vue'

// Cart
import CartProductList from '@c/cart/product-list.vue'
import ShopCartMenu from '@c/cart/shop-cart-menu.vue'

Vue.component('cart-product-list', CartProductList)
Vue.component('shop-cart-menu', ShopCartMenu)

// Product
import ProductArea from '@c/product/product-area.vue'
import ProductList from '@c/product/list.vue'
// import ProductQuickView from '@c/products/quick-view.vue'

Vue.component('product-area', ProductArea)
Vue.component('product-list', ProductList)
// Vue.component('product-quick-view', ProductQuickView)

// Modal
import PopUpComponent from '@c/popup.vue'
Vue.component('pop-up-component', PopUpComponent)

// import BModal from '@c/modal.vue'
// Vue.component('b-modal', BModal)

// Login Form
// import LoginForm from '@c/auth/login.vue'
// Vue.component('login-form', LoginForm)