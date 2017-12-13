<template>
  <div class="page">
      <div class="nav">
          <div class="logo">
              <a href="/">
                  <img src="/images/wrex.png" />
              </a>
          </div>
          <ul>
              <li><a href="/observasaurus">TRexObservable</a></li>
              <li><a href="/tweenrex">TweenRex</a></li>
              <li><a href="/tyrannoscrollus">TyrannoScrollus</a></li>
              <li class="divider"></li>
              <li><a href="/interpolate">interpolate()</a></li>
              <li class="divider"></li>
              <li><a href="/examples">examples</a></li>
          </ul>
      </div>
    <div class="content">
       <div class="app">
            <nuxt/>
       </div>
    </div>
    <playground></playground>
  </div>
</template>

<script>
import Vue from 'vue'
import Playground from '../components/Playground'

export default {
    components: {
        playground: Playground
    }
}
</script>
<style lang="scss">
@import 'static/base.css';
</style>

<style lang="scss" scoped>
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
    font-family: 'Oswald', sans-serif;
    margin: 0;
    width: 200px;
}
.nav > ul {
    display: flex;
    flex-direction: column;
    list-style-image: none;
    list-style-type: none;
}
.nav li {
    padding: 0.6rem 0.8rem;
}
.nav a {
    font-size: 18px;
    text-decoration: none;
    color: #222;
}

.nav .divider {
    padding: 0 1.5rem !important;
    margin: 0 !important;
    border-bottom: thin solid lightgray;
    width: 100px;
}
.page {
    align-content: stretch;
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
}
</style>
