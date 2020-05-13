import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layouts/AppHeader";
// import AppFooter from "./layouts/AppFooter";
import Home from "./views/Home.vue";
import Upload from "./views/Upload.vue";
import About from "./views/About.vue";

Vue.use(Router);

const base = process.env.NODE_ENV === "production" ? "/background-removal/" : "/";

export default new Router({
  mode: "history",
  base,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home
        // footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About
        // footer: AppFooter
      }
    },
    {
      path: "/upload",
      name: "upload",
      components: {
        header: AppHeader,
        default: Upload
        // footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
