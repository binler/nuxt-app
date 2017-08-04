<template>
  <b-navbar toggleable type="inverse" variant="primary">
    <div class="container">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="/">
        <span>binler</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/about">Tôi!</b-nav-item>
          <b-nav-item to="/repo">Github</b-nav-item>
          <b-nav-item to="/image">Ảnh</b-nav-item>
          <b-nav-item to="/love">Love</b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
