<template>
    <div class="playground">
        <div class="toolbar-panes">
            <button @click="onRun()">Run</button>
        </div>
        <div class="editor-panes">
            <div ref="editor" class="editor-container"></div>
            <div class="frame-container">
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
            editor: undefined,
            html: '',
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
            const editorEl = self.$refs.editor;
            const defaultSlots = self.$slots.default
            self.html = ((defaultSlots.length && defaultSlots[0].text) || '').trim();

            window.onMonacoLoad(function(monaco) {
                self.isLoaded = true

                self.editor = monaco.editor.create(editorEl, {
                    value: self.html,
                    language: 'javascript',
                    lineNumbers: true,
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    theme: 'vs-dark'
                })
                self.editor.layout();
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
            if (self.editor) {
                self.editor.layout()
            }
        },
        onRun() {
            const self = this

            const head = [
                createStyle('base.css')
            ]

            const body = '<h3 class="target">Target</h3>';

            const scripts = [
                createScript('https://unpkg.com/tweenrex/dist/tweenrex-all.min.js'),
                createScript(insertContent(body), true),
                createScript(self.html, true)
            ]

            const html = createHTML(head, scripts)  

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
        + `el.innerHTML = '${contents}';`
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

function createHTML(head, js) {
    return `
<html>
<head>${head.join('')}${js.join('')}</head>
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

}
.editor-panes {
    max-width: 900px;
    height: 280px;
    position: relative;
    display: flex;
}

.editor-container {
    width: 50%;
    height: 280px;
    border: 1px solid grey;
}

.frame-container {
    width: 50%;
    height: 280px;
    overflow: hidden;
}

.frame-container {
    height: 100%;
    border: dashed thin black;
}

.frame-container>iframe {
    height: 100%;
    width: 100%;
}

.placeholder {
    white-space: pre-wrap;
}
</style>
