<template>
<b-navbar type="light" variant="primary" toggleable fixed="top">
  <b-container>
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand tag="h1" class="mb-0" href="/nuxt-app/">binler</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item href="/nuxt-app/about">Tôi!</b-nav-item>
        <b-nav-item href="/nuxt-app/code">Code</b-nav-item>
        <b-nav-item href="/nuxt-app/image">Ảnh</b-nav-item>
        <b-nav-item href="/nuxt-app/love">Love</b-nav-item>
      </b-nav>
    </b-collapse>
  </b-container>
</b-navbar>
</template>
