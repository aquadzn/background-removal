<template>
  <section id="upload-bg" class="section section-shaped section-lg my-0">
    <div class="container mt-md">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <b-form @submit.stop.prevent="onSubmit">
              <div class="d-flex flex-column mb-3">
                <b-form-file
                  v-model="image"
                  accept=".jpg, .jpeg, .png"
                  placeholder="Choose or drop an image"
                  class="w-auto flex-grow-1"
                ></b-form-file>
                <b-button
                  v-if="hasImage"
                  class="btn btn-danger mt-3"
                  @click="clearImage"
                  >Clear image</b-button
                >
              </div>

              <b-img
                v-if="hasImage"
                :src="imageSrc"
                v-bind:class="{ transparent: imageSrc }"
                class="mb-3"
                fluid
                block
                rounded
              ></b-img>

              <div class="d-flex flex-column">
                <b-button
                  :disabled="!hasImage"
                  class="btn btn-dark mb-2"
                  type="submit"
                >
                  Remove background
                </b-button>
                <base-alert
                  v-if="hasFailed"
                  class="mt-2"
                  type="danger"
                  icon="ni ni-bell-55"
                  dismissible
                >
                  <span slot="text"
                    ><strong>Failed!</strong> Clear image and try again.</span
                  >
                </base-alert>
                <base-alert
                  v-if="hasPredicted"
                  class="mt-2"
                  type="success"
                  icon="ni ni-like-2"
                  dismissible
                >
                  <span slot="text"><strong>Background removed!</strong></span>
                </base-alert>
                <b-button
                  :disabled="!hasPredicted"
                  class="btn btn-success"
                  v-on:click="downloadPredictedImage(imageSrc)"
                >
                  Download result
                </b-button>
              </div>
            </b-form>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BImg, BButton, BForm, BFormFile } from "bootstrap-vue";
import axios from "axios";

var FileSaver = require("file-saver");

const base64Encode = data =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default {
  data() {
    return {
      image: null,
      imageSrc: null,
      hasPredicted: false,
      hasClicked: true,
      hasFailed: false
    };
  },
  components: {
    BImg,
    BButton,
    BForm,
    BFormFile
  },
  computed: {
    hasImage() {
      return !!this.image;
    }
  },
  watch: {
    image(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue) {
          base64Encode(newValue)
            .then(value => {
              this.imageSrc = value;
            })
            .catch(() => {
              this.imageSrc = null;
            });
        } else {
          this.imageSrc = null;
        }
      }
    }
  },
  methods: {
    clearImage() {
      this.image = null;
      this.hasPredicted = false;
      this.hasFailed = false;
    },

    onSubmit() {
      if (!this.image) {
        alert("Please select an image.");
        return;
      }

      let formData = new FormData();
      formData.append("file", this.image);
      axios
        .post("https://background-removal-oylgf3jsja-ue.a.run.app/remove", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.imageSrc = response.data;
          this.hasPredicted = true;
          console.log("Success");
        })
        .catch(error => {
          console.log(error);
          this.hasFailed = true;
        });
    },

    downloadPredictedImage(url) {
      var byteString = atob(url.split(",")[1]);
      var mimeString = url
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ab], { type: mimeString });
      FileSaver.saveAs(blob, "result.png");
    }
  }
};
</script>

<style>
.transparent {
  background-color: #fff;
  background-image: linear-gradient(45deg, #ecf0f1 25%, transparent 25%),
    linear-gradient(-45deg, #ecf0f1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ecf0f1 75%),
    linear-gradient(-45deg, transparent 75%, #ecf0f1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>
