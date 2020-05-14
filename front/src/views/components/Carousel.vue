<template>
  <section id="carousel-bg" class="section section-shaped section-xl my-0">
    <!-- <div class="shape shape-style-1 shape-primary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> -->
    <div class="container py-0 pt-sm pb-md">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <h1 class="text-white font-weight-bold">
            Remove background from your image
          </h1>
          <p class="lead text-white mt-4">
            Free and automatic image background removal service. Without
            resizing.
          </p>
          <router-link
            to="/upload"
            class="nav-item btn btn-white text-dark mt-4"
          >
            <span class="nav-link-inner--text">Try by yourself !</span>
          </router-link>
        </div>
        <div class="col-lg-5 mb-lg-auto">
          <div
            class="rounded shadow-lg overflow-hidden transform-perspective-right"
          >
            <b-carousel id="carousel1" background="#fff" controls indicators>
              <!-- Text slides with image -->
              <b-carousel-slide
                img-src="https://i.ibb.co/PzsvZtV/emily.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://i.ibb.co/Km2QXwx/emily-res.png"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://i.ibb.co/T22gfLY/godfather.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://i.ibb.co/Bs2MYpJ/godfather-res.png"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style></style>
