<template>
<component :is="type" class="row">
  <div 
    v-for="(list, key) in lists" 
    :key="key"
    class="col-sm-6 col-md-4 col-xl-3"
  >
    <div class="single-product-area">
      <div class="product-wrapper gridview">
        <div @click="showProduct(list)">
          <div class="list-col4">
            <div class="product-image">
              <img :src="list.image" alt="" width="600" height="600">
            </div>
          </div>
          <div class="list-col8">
            <div class="product-info">
              <strong>{{ list.name }}</strong>
              <p>{{ list.description }}</p>
              <span class="price">
                  ₱ {{ list.price }}
              </span>
            </div>
          </div>
        </div>
        <cart-add :product="list"></cart-add>
      </div>
    </div>
  </div>
  <!-- <product-quick-view :product="quickViewProduct" :show="showModal"></product-quick-view> -->
</component>
</template>

<script>
import CartAdd from '@c/cart/add'

export default {
  name: 'product-list',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    lists: {
      type: Array,
      required: true
    }
  },
  components: {
    CartAdd
  },
  data () {
    return {
      showModal: false,
      quickViewProduct: null
    }
  },
  methods: {
    showProduct (product) {
      this.showModal = true
      this.quickViewProduct = product
    }
  }
}
</script>

<style scoped>
.product-wrapper .list-col8 {
  padding-top: 0;
}
.single-product-area .gridview h2 {
  margin-top: 0;
}
.single-product-area .gridview h2 a {
  margin-bottom: 0;
}
.product-info p {
  margin-bottom: 0;
}
</style>
