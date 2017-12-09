/**
 * This script bootstraps monaco editor
 */
; (function (exports, require) {
    'use strict'
    var loaded
    var queue = []

    require(['vs/editor/editor.main'], function() {
        // prettier-ignore
        monaco.languages.typescript.javascriptDefaults.addExtraLib( 
            'https://unpkg.com/@tweenrex/core/types/index.d.ts'
        )

        if (queue.length) {
            // notify all parties waiting
            queue.forEach(function(q) {
                q(monaco)
            })
            queue.length = 0
        }
        loaded = true
    })
    exports.onMonacoLoad = function(fn) {
        if (!loaded) {
            queue.push(fn)
            return
        }
        fn(monaco)
    }
})(window, window.require)
