<template>
<div>
    <div :class="{ visible: isShowing }" class="modal">
        <div class="modal-content">
            <div class="playground">
                <div class="editor-wrapper">
                    <div class="editor-tools">
                        <button @click="onRun()">Run</button>
                        <button @click="onCloseModal()">Close</button>
                    </div>
                    <div class="editor-panes">
                        <div class="editor-container">
                            <div ref="jsEditor" class="editor"></div>
                        </div>
                        <div class="frame-container">
                            <iframe ref="frame"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="onCloseModal()" class="modal-backdrop"></div>
    </div>
</div>
</template>

<script>
import { loadScript, loadStyle } from '../assets/utilities/loader'
const cmScript = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.js'
const cmJavaScript = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/mode/javascript/javascript.min.js'

const styles = [
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/theme/material.min.css'
]

export default {
    data() {
        return {
            content: 'Some content',
            selectedTab: 'js',
            js: '',
            htmlTemplate: '',
            jsEditor: undefined,
            isLoaded: false,
            isShowing: false
        }
    },
    created() {
        if (process.browser) {
            window.addEventListener('edit-code', this.onEditCode)
            window.addEventListener('resize', this.onResize)
        }
    },
    destroyed() {
        if (process.browser) {
            window.removeEventListener('resize', this.onResize)
            window.removeEventListener('edit-code', this.onEditCode)
        }
    },
    methods: {
        setup(fn) {
            const self = this
            self.isLoaded = true

            // load styles
            styles.forEach(loadStyle)

            // load scripts in order and then create code editor
            loadScript(cmScript, () => {
                loadScript(cmJavaScript, () => {
                    const jsEditor = self.$refs.jsEditor
                    const editor = CodeMirror(
                        elt => {
                            jsEditor.parentNode.replaceChild(elt, jsEditor)
                        },
                        {
                            value: self.js,
                            lineNumbers: true,
                            mode: 'javascript',
                            theme: 'material'
                        }
                    )

                    self.jsEditor = editor
                    self.onResize()
                    self.onRun()
                })
            })
        },
        onCloseModal() {
            this.isShowing = false
        },
        onEditCode(evt) {
            const self = this
            self.isShowing = true
            self.htmlTemplate = evt.detail.template
            self.js = evt.detail.code

            if (self.isLoaded) {
                self.jsEditor.setValue(self.js)
                self.onRun()
            } else {
                self.setup()
            }
        },
        onResize() {
            const self = this
            if (self.jsEditor) {
                self.jsEditor.refresh()
            }
        },
        onRun() {
            const self = this
            const html = self.htmlTemplate.replace('$contents', self.jsEditor.getValue())
            const frame = self.$refs.frame
            const doc = frame.contentWindow.document
            doc.open()
            doc.write(html)
            doc.close()
        }
    }
}
</script>

<style>
.CodeMirror {
    height: 100% !important;
}
</style>

<style lang="scss" scoped>
.playground {
    height: 100%;
}
.play-button {
    position: absolute;
    z-index: 9001;
    right: calc(50% - 38px);
    top: 50%;
    border: solid 2px #222222;
    background-color: black;
    fill: white;
    border-radius: 0.8rem;
    cursor: pointer;
    width: 75px;
}

.editor-container {
    width: 100%;
    flex-basis: 50%;
    border: 1px solid grey;
    overflow: hidden;
    position: relative;
}
.editor-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.editor-tools {
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
}
.editor-panes {
    flex-basis: auto;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;
    height: 100%;
}
.editor {
    height: 100%;
    width: 100%;
}
.frame-container {
    background-color: white;
    width: 100%;
    flex-basis: 50%;
    overflow: hidden;
    position: relative;
    margin-left: 4px;
}
.frame-container {
    height: 100%;
    border: 1px solid grey;
}
.frame-container > iframe {
    height: 100%;
    width: 100%;
}
.placeholder {
    white-space: pre-wrap;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    will-change: opacity;
    transition: opacity 150ms ease-out;

    > .modal-content {
        will-change: transform;
        transition: transform 450ms ease-out;
        transition-delay: 50ms;
        transform: translateY(-100%);
    }
    .play-button {
        opacity: 0;
        pointer-events: none;
        will-change: opacity;
        transition: opacity 200ms ease-out;
        transition-delay: 600ms;
    }
}
.modal.visible {
    opacity: 1;
    pointer-events: inherit;

    > .modal-content {
        transform: translateY(0);
    }
}
.modal-backdrop {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: hsla(0, 0, 0.2, 0.4);
    z-index: 8999;
}
.modal-content {
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 5px;
    bottom: 1.6rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    justify-content: center;
    left: 1.6rem;
    padding: 0.3rem;
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    z-index: 9000;
}
</style>
