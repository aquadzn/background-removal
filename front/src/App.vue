<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default';
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Roboto&display=swap');

* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-family: 'Domine', serif;
}

</style>
