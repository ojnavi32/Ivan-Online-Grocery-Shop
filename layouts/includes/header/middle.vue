<template>
  <div class="header-middle-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-md-12">
          <!-- site-logo -->
          <div class="site-logo">
            <a href="index.html"><img src="images/logo/logo-white.png" alt="Nikado"></a>
          </div>
        </div>
        <div class="col-xl-8 col-md-12">
          <!-- header-search -->
          <div class="header-search clearfix">
            <div class="header-search-form">
              <form action="#">
                <input type="text" name="search" placeholder="Search product...">
                <input type="submit" name="submit" value="Search">
              </form>                                    
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-md-12">
          <!-- shop-cart-menu -->
          <shop-cart-menu></shop-cart-menu>
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
