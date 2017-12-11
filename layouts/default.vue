<template>
  <div class="center-stage">
    <nuxt/> 
  </div>
</template>

<script>
import Vue from 'vue'
import Playground from '../components/Playground'

// register global components
Vue.component('playground', Playground);

export default {}
</script>

<style lang="scss">
@import 'static/base.css';

.center-stage {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
} 
</style>
