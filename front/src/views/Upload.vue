<template>
  <div class="container has-text-centered">
    <!-- <b-field class="file"> -->
    <b-upload v-model="file" v-on:change="handleFileUpload()">
      <a class="button is-primary is-fullwidth">
        <b-icon pack="fas" icon="upload" size="is-small"></b-icon>
        <span>{{ file.name || "Click to upload"}}</span>
      </a>
    </b-upload>
    <!-- </b-field> -->
    <b-button type="is-primary" v-on:click="submitFile()">Submit</b-button>

    <div v-if="predicted">
      <div class="columns">
        <div class="column">
          <img class="transparent" :src="predicted" />
        </div>
        <div class="column">
          <img class="transparent" :src="predicted" />
        </div>
      </div>
      <b-button type="is-primary" v-on:click="downloadPredictedImage(predicted)">Download image</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

var FileSaver = require("file-saver");

export default {
  data() {
    return {
      file: "",
      predicted: null
    };
  },
  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      axios
        .post("http://0.0.0.0:4000/predict", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        // .then(response => console.log(response))
        .then(response => {
          this.predicted = response.data;
          console.log("Success");
          // var blob = new Blob([this.predicted], {type:'image/png'})
          // FileSaver.saveAs(base64ToBlob(this.predicted), "result.png");
        })
        // .then(response => {
        //   var blob = new Blob([Buffer.from(response.data, 'binary').toString('base64')], {type:'image/png'})
        //   FileSaver.saveAs(blob, "result.png");
        // })
        // .then(response => (this.predicted = Buffer.from(response.data, 'binary').toString('base64')))
        .catch(error => console.log(error));
    },

    downloadPredictedImage(url) {
      var byteString = atob(url.split(",")[1]);

      // separate out the mime component
      var mimeString = url
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], { type: mimeString });
      FileSaver.saveAs(blob, "result.png");
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log("Filename:", this.file.name, "File type:", this.file.type);
    }
  }
};
</script>