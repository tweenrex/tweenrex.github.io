<template>
<div>
    <div :class="{ visible: isShowing }" class="modal">
        <div @click="onCloseModal()" class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"/>
            </svg>
        </div>
        <div class="play-button">
            <div @click="onRun()">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-3 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z"/>
                </svg>
            </div>
        </div>
        <div class="modal-content">
            <div class="playground">
                <div class="editor-panes">
                    <div class="editor-container">
                        <div v-show="isLoaded" ref="jsEditor" class="editor"></div>
                    </div>
                    <div class="frame-container">
                        <iframe ref="frame"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div @click="onCloseModal()" class="modal-backdrop"></div>
    </div>
</div>
</template>

<script>
const component = {
    data() {
        return {
            content: 'Some content',
            selectedTab: 'js',
            js: '',
            jsEditor: undefined,
            isLoaded: false,
            isShowing: false
        }
    },
    created() {
        const self = this
        if (process.browser) {
            window.addEventListener('resize', self.onResize)
            window.addEventListener('edit-code', self.onEditCode)
        }
    },
    mounted() {
        const self = this

        if (process.browser) {
            const jsEditor = self.$refs.jsEditor
            self.js = 'var t1 = TweenRex({});'
            self.isLoaded = true

            window.onMonacoLoad(function(monaco) {
                self.jsEditor = monaco.editor.create(jsEditor, {
                    value: self.js,
                    language: 'javascript',
                    lineNumbers: true,
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false
                })

                self.onResize()
                self.onRun()
            })
        }
    },
    destroyed() {
        if (process.browser) {
            window.removeEventListener('resize', this.onResize)
            window.removeEventListener('edit-code', this.onEditCode)
        }
    },
    methods: {
        onCloseModal() {
            this.isShowing = false
        },
        onEditCode(evt) {
            const self = this
            self.isShowing = true
            self.templateName = evt.detail.templateName

            const js = (self.js = evt.detail.js)
            self.jsEditor.setValue(js)
            self.onRun()
        },
        onResize() {
            const self = this
            if (self.jsEditor) {
                self.jsEditor.layout()
            }
        },
        onRun() {
            const self = this
            const htmlTemplate =
                self.templateName === 'text-template'
                    ? '<img class="wrex" width="200" height="200" src="images/wrex.png" />'
                    : '<h1 class="wrex">TweenRex</h1>'

            const html = createHTML([
                createStyle('/example.css'),
                createScript('https://unpkg.com/tweenrex/dist/tweenrex-all.min.js'),
                createScript('https://unpkg.com/just-curves/dist/just-curves.min.js'),
                createScript('https://unpkg.com/polymorph-js/dist/polymorph.min.js'),
                createScript(insertContent(htmlTemplate), true),
                createScript(self.jsEditor.getValue(), true)
            ])

            const frame = self.$refs.frame
            const doc = frame.contentWindow.document
            doc.open()
            doc.write(html)
            doc.close()
        }
    }
}

function createStyle(href) {
    return `<link rel="stylesheet" href="${href}" />`
}

function insertContent(contents) {
    return (
        `var el = document.createElement('div');` +
        `el.innerHTML = '` +
        contents +
        `';` +
        `document.body.appendChild(el);`
    )
}

function onLoad(script) {
    return `;window.addEventListener('load', function() { ` + script + `});`
}

function createScript(srcOrContents, contents) {
    return (
        '<script' +
        (contents ? '' : ' src="' + srcOrContents + '"') +
        '>' +
        (contents ? onLoad(srcOrContents) : '') +
        '</sc' +
        'ript>'
    )
}

function createHTML(contents) {
    return `
<html>
<head>${contents.join('')}</head>
<body class="example"></body>
</html>
`
}

export default component
</script>

<style lang="scss" scoped>
.playground {
    height: 100%;
}
.close-button {
    cursor: pointer;
    position: absolute;
    z-index: 9001;
    top: 1.8rem;
    right: 1.8rem;
    will-change: transform;
    transform: scale(1);
    transition: transform 350ms;
}
.close-button:hover {
    transform: scale(1.2);
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
.editor-panes {
    display: flex;
    width: 100%;
    position: relative;
    height: 100%;
}

.editor-container {
    width: 100%;
    flex-basis: 50%;
    border: 1px solid grey;
    overflow: hidden;
}
.editor {
    height: 100%;
    width: 100%;
}
.frame-container {
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

    visibility: hidden;
    width: 100%;
    height: 100%;
}
.modal.visible {
    visibility: visible;
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
    background-color: #fbfbfb;
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
