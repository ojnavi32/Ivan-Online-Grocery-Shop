<template>
  <div class="wrapper home-one home-three">
    <header class="header-area">
      <header-top></header-top>
      <header-middle></header-middle>
      <header-bottom></header-bottom>
    </header>

    <div class="col-md-9 offset-md-3">
        <nuxt/>
    </div>
  </div>
</template>

<script>
import HeaderBottom from './includes/header/bottom'
import HeaderMiddle from './includes/header/middle'
import HeaderTop from './includes/header/top'

export default {
  components: { 
    HeaderBottom,
    HeaderMiddle,
    HeaderTop
  }
}
</script>
