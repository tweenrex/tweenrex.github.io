export function loadScript(url, callback) {
    const s = document.createElement('script')
    s.src = url
    s.onload = callback
    document.head.appendChild(s)
}

export function loadStyle(url) {
    const s = document.createElement('link')
    s.rel = 'stylesheet';
    s.href = url
    document.head.appendChild(s)
}
