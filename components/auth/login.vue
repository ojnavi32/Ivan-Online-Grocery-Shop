<template>
  <form @submit.prevent="submit" class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Login</h1>

    <ds-input 
      v-model="login.username"
      type="email" 
      placeholder="Email Address" 
      required
    ></ds-input>
    <ds-input 
      v-model="login.password"
      type="password" 
      placeholder="Password" 
      required
    ></ds-input>

    <a href="#" class="float-right" id="forgot_pswd">Forgot password?</a>
    <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Login</button>

    <div class="or-separator">
      <div class="label">OR</div>
    </div>

    <div class="social-login">
        <button class="btn facebook-btn social-btn" type="button"><span><i class="fa fa-facebook-f"></i> Login with Facebook</span> </button>
    </div>

    <div class="footer-text">
      <div>Don't have an account!</div>
      <a href="#" @click="showAuthForm('signup')" class="color-primary">Sign Up For Free!</a>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      login: {
          grant_type: 'password',
          client_id: process.env.clientId,
          client_secret: process.env.clientSecret,
          username: 'admin@gmail.com',
          password: 'admin',
          scope: '',
      }
    }
  },
  methods: {
    async submit () {
      let { access_token } = await this.$store.dispatch('auth/LOGIN_NORMAL', this.login)

      this.$store.dispatch('auth/SET_ACCESS_TOKEN', access_token)

      await this.$store.dispatch('customer/initialize')

      this.$store.commit('setShowModal', false)
    }
  }
}
</script>