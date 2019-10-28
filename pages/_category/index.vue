<template>
<product-area
  :title="category_name"
  :lists="category_product"
>
<template slot="header">
  <div class="sub-category-list-container">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <nuxt-link
          :to="category_path"
          class="nav-link active"
        >All</nuxt-link>                      
      </li>
      <li 
        class="nav-item"
        v-for="(sub, key) in sub_categories"
        :key="key"
      >
        <nuxt-link
          :to="category_path + '/' + sub.slug"
          class="nav-link"
        >{{ sub.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
</product-area>
</template>

<script>
export default {
  async asyncData ({store, params}) {
    let cat = params.category
    
    await store.dispatch('product/FETCH_BY_CATEGORY', {
      slug: cat,
      parent: true
    })
    await store.dispatch('category/FETCH_SUB_CATEGORIES', {slug: cat})
    
    return {
      category_path: `/${cat}`,
      category_name: _.toUpper(cat),
      category_product: store.state.product.by_category,
      sub_categories: store.state.category.sub_categories
    }
  }
}
</script>