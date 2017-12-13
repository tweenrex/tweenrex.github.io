<template>
<div>
    <div data-id="playground" v-show="isShowing" class="modal">
        <div class="modal-content">
            <div class="playground">
                <div class="editor-panes">
                    <div class="editor-container">
                        <div v-show="isLoaded" ref="jsEditor" class="editor"></div>
                    </div>
                    <div class="frame-container">
                        <div class="toolbar-panes">
                            <button @click="onRun()">Reload</button>
                        </div>
                        <iframe ref="frame"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop"></div>
    </div>
</div>
</template>

<script>
const component = {
    data() {
        return {
            content: 'Some content',
            selectedTab: 'js',
            html: '',
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
        }
    },
    mounted() {
        const self = this

        if (process.browser) {
            const jsEditor = self.$refs.jsEditor
            self.js = 'var t1 = TweenRex({});'
            self.html = '<img class="wrex" width="200" height="200" src="images/wrex.png" />'
            self.isLoaded = true

            window.onMonacoLoad(function(monaco) {
                self.jsEditor = monaco.editor.create(jsEditor, {
                    value: self.js,
                    language: 'javascript',
                    lineNumbers: false,
                    roundedSelection: false,
                    scrollBeyondLastLine: true,
                    readOnly: false,
                    theme: 'vs-dark'
                })

                self.onResize()
                self.onRun()
            })
        }
    },
    destroyed() {
        if (process.browser) {
            window.removeEventListener('resize', this.onResize)
        }
    },
    methods: {
        onResize() {
            const self = this
            if (self.jsEditor) {
                self.jsEditor.layout()
            }
        },
        onRun() {
            const self = this

            const html = createHTML([
                createStyle('/example.css'),
                createScript('https://unpkg.com/tweenrex/dist/tweenrex-all.min.js'),
                createScript(insertContent(self.html), true),
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

<style scoped>
.playground {
}

.toolbar-panes {
    position: absolute;
    z-index: 9000;
    right: 0;
    top: 0;
}

.editor-panes {
    max-width: 900px;
    height: 280px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
}

.editor-container {
    width: 320px;
    flex: 1 1 auto;
    border: 1px solid grey;
    min-width: 320px;
    overflow: hidden;
}

.editor {
    height: 280px;
    width: 100%;
}

.frame-container {
    width: 320px;
    flex: 1 1 auto;
    height: 280px;
    min-width: 320px;
    overflow: hidden;
    position: relative;
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
    width: 100%;
    height: 100%;
}
.modal-backdrop {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: hsla(0, 0, 0.2, 0.4);
    z-index: 8999;
}
.modal-content {
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 10px;
    justify-content: center;
    align-items: center;
    z-index: 9000;
    background-color: white;
    max-width: 900px;
    min-width: 320px;
    width: 100%;
}
</style>
