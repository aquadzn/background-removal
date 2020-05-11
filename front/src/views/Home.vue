<template>
  <div class="container has-text-centered">
  <div class="columns is-vcentered">
    <div class="column is-half">
      <div>
        <ImageSlider
          class="transparent"
          offset="0.58"
          before="https://i.ibb.co/PzsvZtV/emily.jpg"
          after="https://i.ibb.co/Km2QXwx/emily-res.png"
        />
      </div>
    </div>
    <div class="column is-half">
      <h1 class="title is-2">Remove background from image</h1>
      <br />
      <h2 class="subtitle is-4">Free and automatic background removal service. Without resizing.</h2>
      <b-button tag="router-link" to="/upload" type="is-primary is-rounded">
        <strong>Upload image</strong>
      </b-button>
    </div>
  </div>
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";

export default {
  components: {
    ImageSlider
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.transparent {
  background-color: #fff;
  background-image: linear-gradient(45deg, #ecf0f1 25%, transparent 25%),
    linear-gradient(-45deg, #ecf0f1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ecf0f1 75%),
    linear-gradient(-45deg, transparent 75%, #ecf0f1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
  border: 4px solid #363636;
  -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.5);
}
</style>
