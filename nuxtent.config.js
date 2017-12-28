const Prism = require('prismjs')
const fs = require('fs')

const files = {}

module.exports = {
    content: {
        permalink: ':slug',
        page: '/_content',
        generate: [
            // for static build
            'get',
            'getAll'
        ],
        isPost: false
    },
    parsers: {
        md: {
            highlight: (code, language) => {
                const langParts = language.split(':', 2)
                const lang = langParts[0] || 'text'
                const highlightedCode = Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
                const isInteractive = langParts.length > 1

                let hiddenContents = ''
                if (isInteractive) {
                    const templateUrl = './static/' + (langParts[1] || 'template/wrex') + '.html'
                    const template = files[templateUrl] || (files[templateUrl] = fs.readFileSync(templateUrl, 'UTF-8'))
                    const data = { template, code }

                    // prettier-ignore
                    hiddenContents = '<noscript playground-data>' + escape(JSON.stringify(data)) + '</noscript>'
                }

                // prettier-ignore
                return (
                    '<pre class="language-' + lang + ' ' + (isInteractive ? 'interactive' : '') + '">'
                    + hiddenContents
                    + '<code class="language-' + lang + '">' + highlightedCode + '</code>'
                    + '</pre>'
                )
            }
        }
    }
}
