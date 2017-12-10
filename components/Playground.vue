<template>
    <div class="playground">
        <div ref="editor" class="editor-container"></div>
        <div class="frame-container">
            <iframe></iframe>
        </div>
    </div>
</template>

<script>
const component = {
    data() {
        return {
            content: 'Some content',
            editor: undefined,
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
            const html = ((defaultSlots.length && defaultSlots[0].text) || '').trim();

            window.onMonacoLoad(function(monaco) {
                self.isLoaded = true

                self.editor = monaco.editor.create(editorEl, {
                    value: html,
                    language: 'typescript',
                    lineNumbers: true,
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    theme: 'vs-dark'
                })
                self.editor.layout();
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
        }
    }
}

export default component
</script>

<style scoped>
.playground {
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
}
.frame-container {
    height: 100%;
    border: dashed thin black;
}

.placeholder {
    white-space: pre-wrap;
}
</style>
