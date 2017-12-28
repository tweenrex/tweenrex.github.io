import { setTimeout } from 'timers'
import Vue from 'vue'
import { unescape } from 'querystring'

var loaded
var loading
var queue = []

/**
 * This script bootstraps monaco editor
 */
if (process.browser) {
    window.loadMonaco = function() {
        if (loading || loaded) {
            return
        }
        loading = true

        // both nuxt and monaco try to set global require, so a bit of gymnastics is "required" here
        const nuxtRequire = window.require

        loadScript('vs/loader.js', () => {
            const amdRequire = window.require

            amdRequire(['vs/editor/editor.main'], function() {
                window.require = nuxtRequire

                monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
                    noSemanticValidation: true,
                    noSyntaxValidation: false
                })

                monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                    target: monaco.languages.typescript.ScriptTarget.ES5,
                    allowNonTsExtensions: true
                })

                // monaco.languages.typescript.javascriptDefaults.addExtraLib()
                if (queue.length) {
                    // notify all parties waiting
                    queue.forEach(function(q) {
                        q(monaco)
                    })
                    queue.length = 0
                }
                loaded = true
                loading = false

                window.require = nuxtRequire
                window.amdRequire = amdRequire
            })
        })
    }

    window.onMonacoLoad = function(fn) {
        if (!loaded) {
            queue.push(fn)
            return
        }
        fn(monaco)
    }
}

function loadScript(url, callback) {
    const s = document.createElement('script')
    s.src = url
    s.onload = callback
    document.head.appendChild(s)
}

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
