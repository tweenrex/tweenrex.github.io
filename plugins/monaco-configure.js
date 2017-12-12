/**
 * This script bootstraps monaco editor
 */

if (process.browser) {
    ;(function(exports) {
        'use strict'
        var loaded
        var queue = []

        exports.require([ 'vs/editor/editor.main'], function() {
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
        })

        exports.onMonacoLoad = function(fn) {
            if (!loaded) {
                queue.push(fn)
                return
            }
            fn(monaco)
        }
    })(window)
}
