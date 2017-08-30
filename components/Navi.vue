<template>
<b-navbar type="light" variant="primary" toggleable fixed="top">
  <div class="container">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand active-class href="/nuxt-app/">Binler</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item href="/nuxt-app/about">Tôi!</b-nav-item>
        <b-nav-item href="/nuxt-app/code">Code</b-nav-item>
        <b-nav-item href="/nuxt-app/image">Ảnh</b-nav-item>
        <b-nav-item href="/nuxt-app/love">Love</b-nav-item>
      </b-nav>
    </b-collapse>
  </div>
</b-navbar>
</template>
