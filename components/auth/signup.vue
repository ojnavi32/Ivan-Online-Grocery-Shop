<template>
  <form action="/signup/" class="form-signup">
    <div class="social-login">
        <button class="btn facebook-btn social-btn" type="button"><span><i class="fa fa-facebook-f"></i> Login via Facebook</span> </button>
    </div>            

    <input type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="">
    <input type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="">
    <input type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="">
    <input type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="">

    <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>

      <div class="footer-text">
        <div>Already have an account?</div>
        <a href="#" @click="showAuthForm('login')" class="color-primary">Login Here!</a>
      </div>
  </form>
</template>