import { setTimeout } from 'timers'
import Vue from 'vue'
import { unescape } from 'querystring'

Vue.mixin({
    mounted() {
        if (process.browser) {
            const els = Array.prototype.slice.call(this.$el.querySelectorAll('.interactive:not(.loaded)'))
            els.forEach(el => {
                el.classList.add('loaded')

                // create launcher icon
                const launcher = document.createElement('button')
                launcher.classList.add('code-launcher')
                launcher.innerHTML = 'Run'

                launcher.addEventListener('click', () => {
                    const rawData = el.querySelector('[playground-data]').innerHTML
                    const unescapedData = window.unescape(rawData)
                    const detail = JSON.parse(unescapedData)
                    window.dispatchEvent(new CustomEvent('edit-code', { detail }))
                })

                // add launcher icon
                el.appendChild(launcher)
            })
        }
    }
})
