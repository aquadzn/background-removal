<template>
  <section id="about-bg" class="section section-shaped section-lg my-0">
    <div class="bg-gradient-default"></div>
    <div class="container pt-1">
      <div class="row text-center justify-content-center">
        <div class="col-lg-10">
          <h2 class="display-3 text-white">Background Removal</h2>
          <p class="lead text-white">
            This is a project made by
            <badge type="primary" class="text-uppercase"
              ><a href="https://github.com/aquadzn" target="_blank"
                ><b>aquadzn</b></a
              ></badge
            >
            using
            <badge type="primary" class="text-uppercase mt-2"
              ><a href="https://github.com/NathanUA/U-2-Net" target="_blank">
                <b
                  >U^2-Net: Going Deeper with Nested U-Structure <br />
                  for Salient Object Detection</b
                >
              </a></badge
            >
            <br />
            <badge type="primary" class="text-uppercase m-2"
              ><a href="https://vuejs.org" target="_blank">
                <b>Vue</b>
              </a></badge
            >
            <badge type="primary" class="text-uppercase m-2"
              ><a href="https://bootstrap-vue.org" target="_blank">
                <b>Bootstrap Vue</b>
              </a></badge
            >
            <badge type="primary" class="text-uppercase m-2"
              ><a
                href="https://github.com/creativetimofficial/vue-argon-design-system"
                target="_blank"
              >
                <b>Argon</b>
              </a></badge
            >
            <badge type="primary" class="text-uppercase m-2"
              ><a href="https://github.com/pallets/flask" target="_blank">
                <b>Flask</b>
              </a></badge
            >
          </p>
        </div>
      </div>
      <div class="row row-grid mt-sm">
        <div class="col-lg-4">
          <icon
            name="fa fa-bolt"
            size="lg"
            gradient="white"
            shadow
            round
            color="primary"
          ></icon>
          <h5 class="text-white mt-3">Fast</h5>
          <p class="text-white mt-3">
            It only takes a few seconds to remove the background from your
            image.
          </p>
        </div>
        <div class="col-lg-4">
          <icon
            name="fa fa-image"
            size="lg"
            gradient="white"
            shadow
            round
            color="primary"
          ></icon>
          <h5 class="text-white mt-3">Full-resolution</h5>
          <p class="text-white mt-3">
            The output image resolution remains the same as the input.
          </p>
        </div>
        <div class="col-lg-4">
          <icon
            name="fa fa-eye-slash"
            size="lg"
            gradient="white"
            shadow
            round
            color="primary"
          ></icon>
          <h5 class="text-white mt-3">On the fly</h5>
          <p class="text-white mt-3">
            Your image isn't stored anywhere because computation is done on the
            fly.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
