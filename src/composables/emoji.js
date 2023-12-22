export default function getEmoji(data, code) {
    return data.filter((el) => el.htmlCode.includes(code))
}