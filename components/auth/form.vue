<template>
  <div id="logreg-forms">
    <pop-up-component v-if="showModal" @close="setModal(false)">
      <login-form v-if="displayForm('login')"></login-form>
      <signup-form v-if="displayForm('signup')"></signup-form>
    </pop-up-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginForm from './login'
import SignupForm from './signup'

export default {
  components: {
    LoginForm,
    SignupForm
  },
  methods: {
    displayForm (form) {
      return form === this.authForm ? true : false
    },
    setModal (set) {
      this.$store.commit('setShowModal', set)
    },
    showSignup (login = false) {
      this.loginForm = login
    }
  },
  computed: mapGetters({
    showModal: 'showModal',
    authForm: 'authForm'
  })
}
</script>

<style lang="scss">
.footer-text {
  text-align: center;
  margin-top: $space-l;
}
.footer-text a {
  font-size: $font-s;
  font-weight: $weight-light;
}
.or-separator {
  position: relative;
  width: auto;
  height: 1px;
  margin: 24px auto;
  background: rgba(224,224,224,.5);
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.or-separator .label {
  background: #fff;
  color: #8f8d8b;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  padding: 0 5px;
}
/* Login FORM */
#logreg-forms form {
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
}
#logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    margin: 10px 0;
}
#logreg-forms .form-control:focus { z-index: 2; }
#logreg-forms .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
#logreg-forms .form-signin input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

#logreg-forms .social-login{
    width:390px;
    margin:0 auto;
    margin-bottom: 14px;
}
#logreg-forms .social-btn{
    font-weight: 100;
    color:white;
    width:100%;
    font-size: 0.9rem;
}

#forgot_pswd {
  padding-bottom: 10px;
}

#logreg-forms a{
    display: block;
}

#logreg-form .lines{
    width:200px;
    border:1px solid red;
}


.form-signin p {
    margin: 1.5rem 0;
}

#logreg-forms button[type="submit"]{ margin-top:10px; }

#logreg-forms .facebook-btn{  background-color:#3C589C; }

#logreg-forms .google-btn{ background-color: #DF4B3B; }

#logreg-forms .form-signup .social-btn{ width:210px; }

#logreg-forms .form-signup input { margin-bottom: 2px;}

.form-signup .social-login{
    width:210px !important;
    margin: 0 auto;
}

/* Mobile */

@media screen and (max-width:500px){
    #logreg-forms{
        width:300px;
    }
    
    #logreg-forms  .social-login{
        width:200px;
        margin:0 auto;
        margin-bottom: 10px;
    }
    #logreg-forms  .social-btn{
        font-size: 1.3rem;
        font-weight: 100;
        color:white;
        width:200px;
        height: 56px;
        
    }
    #logreg-forms .social-btn:nth-child(1){
        margin-bottom: 5px;
    }
    #logreg-forms .social-btn span{
        display: none;
    }
    #logreg-forms  .facebook-btn:after{
        content:'Facebook';
    }
  
    #logreg-forms  .google-btn:after{
        content:'Google+';
    }
    
}
</style>