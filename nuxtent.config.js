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
            highlight: (code, lang) => {
                return '<pre class="code-block"><code class="language-' + lang + ' ">' + code.trim() + '</code></pre>';
            }
        }
    }
}
