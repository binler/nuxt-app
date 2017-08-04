<template>
  <div class="view">
      <!--Intro content-->
      <div class="full-bg-img flex-center">
          <ul>
              <li>
                  <h1>Material Design for Bootstrap 4</h1></li>
              <li>
                  <p>The most powerful and free UI KIT for Bootstrap</p>
              </li>
              <li>
                  <a target="_blank" href="https://mdbootstrap.com/getting-started/" class="btn btn-primary btn-lg">Sign up!</a>
                  <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-default btn-lg">Learn more</a>
              </li>
          </ul>
      </div>
      <!--/Intro content-->
  </div>
</template>

<script>

export default {
  layout: 'index'
}
</script>

<style>
html,
body,
#__nuxt,
.view {
    height: 100%;
}
.view {
    background: url("https://mdbootstrap.com/images/regular/city/img%20(17).jpg")no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
