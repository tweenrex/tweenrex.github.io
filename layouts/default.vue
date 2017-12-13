<template>
  <div class="page">
      <div class="nav-toggle" :class="{ 'visible': !isNavOpen }" @click="openNav()">MENU</div>
        <div class="nav" :class="{ 'visible': isNavOpen }">
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
    <div class="backdrop"  @click="closeNav()" :class="{ 'visible': isNavOpen }">
        <div class="close-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"/>
            </svg>
        </div>
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
    },
    data: () => ({
        isNavOpen: false
    }),
    methods: {
        closeNav() {
            this.isNavOpen = false
        },
        openNav() {
            this.isNavOpen = true
        }
    }
}
</script>
<style lang="scss">
@import 'static/base.css';
</style>

<style lang="scss" scoped>
$mobile-size: 600px;

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
@media screen and (max-width: $mobile-size) {
    .content {
        box-shadow: unset;
        padding-top: 1.1rem;
        width: 100%;
    }
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
.backdrop {
    display: none;
}
@media screen and (max-width: $mobile-size) {
    .nav {
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        position: fixed;
        z-index: 9000;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        transform: translateX(-100%);
        transition: transform 450ms ease;
        will-change: transform;
    }
    .nav.visible {
        transform: translateX(0px);
    }
    .backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        display: block;
        position: fixed;
        opacity: 0.0001;
        transition: opacity 450ms ease;
        user-select: none;
        visibility: hidden;
        will-change: transform;
    }
    .backdrop.visible {
        bottom: 0;
        left: 0;
        opacity: 1;
        right: 0;
        user-select: auto;
        visibility: visible;
        top: 0;
        z-index: 8999;
    }
    .close-icon {
        position: absolute;
        top: calc(50% - 0.5rem);
        right: calc(calc(100% - 240px) / 2);
        fill: #e8e8e8;
    }
}

.nav-toggle {
    display: none;
}
@media screen and (max-width: $mobile-size) {
    .nav-toggle {
        background-color: #222;
        color: white;
        display: block;
        padding: 0.6rem 1rem;
        position: fixed;
        right: .5rem;
        transform: translateX(200%);
        transition: transform 350ms;
        top: .5rem;
        will-change: transform;
        z-index: 2;
    }
    .nav-toggle.visible {
        transform: translateX(0px);
    }
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

    @media screen and (max-width: $mobile-size) {
        display: block;
    }
}
</style>
