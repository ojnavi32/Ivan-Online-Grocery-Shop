<template>
  <component :is="type" class="product-area">
    <div class="container">
      <slot name="header"></slot>

      <div v-if="multiple">
        <div
          v-for="(item, key) in multipleItems"
          :key="key"
          class="product-area-home-three"
        >
          <div class="row">
            <div class="col-sm-12">
              <div class="section-title">
                <h3>{{ key }}</h3>
              </div>
            </div>
          </div>
          <div class="product-area-inner">
            <product-list :lists="item"></product-list>
          </div>
        </div>
      </div>
      <div 
        v-else 
        class="product-area-home-three"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="section-title">
              <h3>{{ title }}</h3>
            </div>
          </div>
        </div>
        <div class="product-area-inner">
          <product-list :lists="lists"></product-list>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'product-area',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    title: {
      type: String,
    },
    lists: {
      type: Array,
    },
    multiple: {
      type: Boolean,
      default: false
    },
    multipleItems: {
      type: [Array, Object],
    }
  }
}
</script>