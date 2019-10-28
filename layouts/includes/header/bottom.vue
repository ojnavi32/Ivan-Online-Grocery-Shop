<template>
  <div class="header-bottom-area">
    <div class="container">
      <div class="row">
          <div class="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
            <div class="categori-menu">
              <nav>
                <ul class="categori-menu-list menu-hidden">
                  <li
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <nuxt-link
                        v-if="category.parent_id === 0"
                        :to="`/${category.slug}`"
                    >
                        {{ category.name }}
                        <i v-if="category.children !== 0" class="fa fa-angle-right" aria-hidden="true"></i>
                    </nuxt-link>
                    <ul v-if="category.children !== 0" class="ht-dropdown megamenu first-megamenu">
                        <li class="single-megamenu">
                            <ul>
                                <li 
                                  v-for="sub in category.children"
                                  :key="sub.id"
                                >
                                  <nuxt-link 
                                    :to="`/${category.slug}/${sub.slug}`"
                                    v-text="sub.name"
                                  ></nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.state.category.lists
    }
  }
}
</script>