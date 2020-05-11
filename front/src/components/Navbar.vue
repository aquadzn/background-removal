<template>
  <b-navbar shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/upload' }">
        <strong>Upload</strong>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        <strong>About</strong>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>

</style>
