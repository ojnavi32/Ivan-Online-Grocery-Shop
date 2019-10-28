<template>
<product-area
  :multiple="true"
  :multipleItems="multipleItems"
>
<template v-slot:product-area-header>
  <div class="banner-img-promos">
    <img src="/images/service/Screenshot_81.png">
  </div>
</template>
</product-area>
</template>

<script>
export default {
  async asyncData ({store}) {
    await store.dispatch('product/FETCH_BEST_SELLERS')
    await store.dispatch('product/FETCH_HOT_DEALS')

    let multipleItems = {}
    multipleItems['Hot Deals'] = store.state.product.hot_deals
    multipleItems['Best Sellers'] = store.state.product.best_sellers

    return {
      multipleItems: multipleItems
    }
  }
}
</script>
