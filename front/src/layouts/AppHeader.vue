<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          src="img/brand/youngman.jpg"
          alt="logo"
          class="rounded-circle img-fluid shadow"
        />
      </router-link>
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <router-link to="/" class="heading text-danger" role="button"
            >Background Removal</router-link
          >
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <router-link to="/upload" class="nav-link" role="button"
          >Upload</router-link
        >
        <router-link to="/about" class="nav-link" role="button"
          >About</router-link
        >
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/aquadzn/test-vue"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Star us on Github"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <router-link
            to="/upload"
            class="nav-item btn outline btn-neutral btn-icon text-dark"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-upload mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Upload</span>
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
// import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
    // BaseDropdown
  }
};
</script>
<style></style>
