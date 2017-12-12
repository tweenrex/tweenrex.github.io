<template>
  <div class="center-stage">
      <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/examples">Examples</a></li>
              <li><a href="/core/observasaurus">TRexObservable</a></li>
              <li><a href="/core/tweenrex">TweenRex</a></li>
              <li><a href="/core/tyrannoscrollus">TyrannoScrollus</a></li>
              <li><a href="/render/interpolate">interpolate</a></li>
          </ul>
      </nav>
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
nav > ul {
    display: flex;
    list-style-image: none;
    list-style-type: none;
}
nav > ul > li {
    padding: .6rem .8rem;
}
</style>
