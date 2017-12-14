import Vue from 'vue'
import { debug } from 'util'

const codeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>`

Vue.mixin({
    mounted() {
        const els = Array.prototype.slice.call(this.$el.querySelectorAll('pre.code-block > code'))

        if (process.browser) {
            window.onMonacoLoad(monaco => {
                els.forEach(el => {
                    const isPlayground = el.classList.contains('language-javascript')

                    const language =
                        isPlayground || el.classList.contains('language-js')
                            ? 'javascript'
                            : el.classList.contains('language-html')
                              ? 'html'
                              : el.classList.contains('language-css') ? 'css' : 'html'

                    const templateName = el.classList.contains('text') ? 'text' : 'image'

                    const code = el.textContent

                    // initial colorized element
                    monaco.editor.colorizeElement(el, {
                        mimeType: language
                    })

                    // add playground launcher
                    if (isPlayground) {
                        const parentElement = el.parentElement
                        if (parentElement.classList.contains('code-block')) {
                            // remove class from <pre />
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
                                window.dispatchEvent(
                                    new CustomEvent('edit-code', {
                                        detail: {
                                            js: code,
                                            templateName: templateName
                                        }
                                    })
                                )
                            })
                        }
                    }
                })
            })
        }
    }
})
