import Vue from 'vue'
import { debug } from 'util'

const codeSvg =
    '<svg xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>' +
    '</svg>'

Vue.mixin({
    mounted() {
        const els = Array.prototype.slice.call(this.$el.querySelectorAll('pre > code'))

        if (process.browser) {
            window.onMonacoLoad(monaco => {
                els.forEach(el => {
                    const language = el.classList.contains('language-js')
                        ? 'javascript'
                        : el.classList.contains('language-html')
                          ? 'html'
                            : el.classList.contains('language-css') ? 'css' : 'html'

                    const code = el.textContent;

                    // initial colorized element
                    monaco.editor.colorizeElement(el, {
                        mimeType: language
                    })

                    // add playground launcher
                    if (language === 'javascript') {
                        // remove class from <pre />
                        const parentElement = el.parentElement
                        parentElement.classList.remove('code-block')

                        // create new wrapper (relative parent)
                        const newParent = document.createElement('div')
                        newParent.classList.add('code-block')

                        // wrap new parent around <pre />
                        parentElement.parentElement.insertBefore(newParent, parentElement)
                        newParent.appendChild(parentElement)

                        // create launcher icon
                        const launcher = document.createElement('div')
                        launcher.classList.add('code-launcher')
                        launcher.innerHTML = codeSvg

                        // add launcher icon
                        parentElement.appendChild(launcher)

                        launcher.addEventListener('click', () => {
                            const codeEditor = document.querySelector('[data-id="playground"]');
                            if (codeEditor && codeEditor.__vue__) {
                                const v = codeEditor.__vue__;
                                v.$data.js = code;
                                v.$data.isShowing = true;
                            }
                        })
                    }
                })
            })
        }
    }
})
