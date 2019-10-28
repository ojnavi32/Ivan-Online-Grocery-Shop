import Vue from 'vue'

Vue.mixin({
  methods: {
    showAuthForm (form) {
      this.$store.commit('setAuthForm', form)
    }
  }
})