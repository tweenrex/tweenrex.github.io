<template>
    <div class="playground">
        <div class="editor-panes">
            <div ref="raw" v-show="!isLoaded">
                <slot name="js"></slot>
                <slot name="html"></slot>
            </div>
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
</template>

<script>
const component = {
    data() {
        return {
            content: 'Some content',
            selectedTab: 'js',
            html: '',
            jsEditor: undefined,
            isLoaded: false
        }
    },
    created() {
        const self = this;
        if (process.browser) {
            window.addEventListener('resize', self.onResize)
        }
    },
    mounted() {
        const self = this

        if (process.browser) {
            const jsEditor = self.$refs.jsEditor;

            const js = (self.$slots.js || [])
                .reduce((c, n) => c + n.elm.textContent, '')
                .trim() || 'var t1 = TweenRex({});'

            this.html = (self.$slots.html || [])
                .reduce((c, n) => c + n.elm.textContent, '')
                .trim() || '<img class="wrex" width="200" height="200" src="images/wrex.png" />';

            self.isLoaded = true

            window.onMonacoLoad(function(monaco) {
                self.jsEditor = monaco.editor.create(jsEditor, {
                    value: js,
                    language: 'javascript',
                    lineNumbers: false,
                    roundedSelection: false,
                    scrollBeyondLastLine: true,
                    readOnly: false,
                    theme: 'vs-dark'
                })

                self.onResize();
                self.onRun();
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
                createStyle('base.css'),
                createScript('https://unpkg.com/tweenrex/dist/tweenrex-all.min.js'),
                createScript(insertContent(self.html), true),
                createScript(self.jsEditor.getValue(), true)
            ])

            const frame = self.$refs.frame
            const doc = frame.contentWindow.document
            doc.open();
            doc.write(html);
            doc.close();
        }
    }
}

function createStyle(href) {
    return `<link rel="stylesheet" href="${href}" />`
}

function insertContent(contents) {
    return `var el = document.createElement('div');`
        + `el.innerHTML = '` + contents + `';`
        + `document.body.appendChild(el);`
}

function onLoad(script) {
    return `;window.addEventListener('load', function() { ` + script + `});`
}

function createScript(srcOrContents, contents) {
    return '<script'
        + (contents ? '' : ' src="' + srcOrContents + '"')
        + '>'
        + (contents ? onLoad(srcOrContents) : '')
        + '</sc' + 'ript>'
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
.playground {}

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

.frame-container>iframe {
    height: 100%;
    width: 100%;
}

.placeholder {
    white-space: pre-wrap;
}
</style>
