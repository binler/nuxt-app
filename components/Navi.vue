<template>
  <b-navbar toggleable type="inverse" variant="primary">
    <div class="container">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="/">
        <span>Nuxt</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/repo">My repo</b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
