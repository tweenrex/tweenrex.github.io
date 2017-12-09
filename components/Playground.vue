<template>
  <div class="playground">  
      <div class="editor-container" ref="editor">
          <p class="placeholder" ref="placeholder" v-if="!isLoaded">{{'function x() {\n\tconsole.log("Hello world!");\n}'}}</p>
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
    mounted() {
        const self = this

        if (process.browser) {
            const editorEl = self.$refs.editor
            const placeholderEl = self.$refs.placeholder

            window.onMonacoLoad(function(monaco) {
                const html = placeholderEl.textContent
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
            })
        }
    }
}

export default component
</script>

<style scoped>
.playground {
    width: 100%;
    height: 320px;
    position: relative;
}
.editor-container {
    width: 100%;
    height: 320px;
    border: 1px solid grey;
}
.placeholder {
    white-space: pre-wrap;
}
</style>
