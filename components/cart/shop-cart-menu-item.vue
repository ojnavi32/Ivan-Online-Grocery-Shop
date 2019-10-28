<template>
  <div class="single-shop-cart-wrapper">
    <div class="shop-cart-img">
      <a href="#">
        <img :src="product.image">
      </a>
    </div>
    <div class="shop-cart-info">
      <h5><a href="">{{ product.name }}</a></h5>
      <span class="price">₱ {{ productTotal }}</span>
      <span class="quantaty">Qty: {{ productQuantity }}</span>
      <span class="cart-remove"><a href="#"><i class="fa fa-times"></i></a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-cart-menu-item',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    cartProduct () {
      return this.$store.getters['cart/productById'](this.product.id)
    },
    productQuantity () {
      return this.cartProduct.quantity
    },
    productTotal () {
      return this.productQuantity * this.cartProduct.price
    }
  }
}
</script>