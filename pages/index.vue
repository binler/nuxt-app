<template>
  <div class="intro-content">
      <h1 class="text-center intro-head-text">binler.</h1>
      <nav class="intro-nav">
        <ul class="d-flex justify-content-center">
          <li><nuxt-link to="/image">ảnh</nuxt-link></li>
          <li><nuxt-link to="/about">tôi!</nuxt-link></li>
          <li><nuxt-link to="/timepass">thời gian</nuxt-link></li>
        </ul>
      </nav>
  </div>
</template>

<script>

export default {
  layout: 'index'
}
</script>

<style>
.intro-content {
  width: 50%;
  position: relative;
}
.intro-nav {
  margin: 0 auto;
  position: relative;
  display: block;
}
.intro-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.intro-nav ul li a {
  text-decoration: none;
  color: #f3f3f3;
  display: block;
  font-size: 1.5rem;
  font-weight: normal;
  padding:0 1em;
  z-index: 2;
  position: relative;
  vertical-align: middle;
}
.intro-nav ul li a:after {
  content: "";
  width: 90%;
  display: none;
  z-index: -1;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(255,255,255,0.8);
}
.intro-head-text {
  color: #f3f3f3;
  font-size: 5rem;
}
.intro-nav ul li a:hover:after {
  display: block;
  animation: test-ani 300ms ease-in-out;
}
@keyframes test-ani {
  from {
    transform: translate(0px, 20px);
  }
  to {
    transform: translate(0px, 0px);
    display: none;
  }
}
</style>
