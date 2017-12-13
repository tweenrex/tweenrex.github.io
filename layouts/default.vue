<template>
  <div class="page">
      <div class="nav">
          <div class="logo">
              <a href="/">
                  <img src="/images/wrex.png" />
              </a>
          </div>
          <ul>
              <li><a href="/examples">Examples</a></li>
              <li><a href="/core/observasaurus">TRexObservable</a></li>
              <li><a href="/core/tweenrex">TweenRex</a></li>
              <li><a href="/core/tyrannoscrollus">TyrannoScrollus</a></li>
              <li><a href="/render/interpolate">interpolate</a></li>
          </ul>
      </div>
    <div class="content">
       <div class="app">
            <nuxt/>
       </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Playground from '../components/Playground'

// register global components
Vue.component('playground', Playground)

export default {}
</script>

<style lang="scss">
@import 'static/base.css';
body {
}
html {
    height: 100%;
}
.app {
    max-width: 900px;
}
.content {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 100vh;
    padding: 0 1.25rem 2rem 1.25rem;
}
.logo {
    text-align: center;
}
.logo > a > img {
    height: 100px;
    width: 100px;
}
.nav {
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0;
    width: 200px;
}
.nav > ul {
    display: flex;
    flex-direction: column;
    list-style-image: none;
    list-style-type: none;
}
.nav > ul > li {
    padding: 0.6rem 0.8rem;
}
.page {
    align-content: stretch;
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
}
</style>
