export default function emojiParser(code) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(code, "text/html")
    return doc.body.textContent
}