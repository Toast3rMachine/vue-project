import getEmoji from '@/composables/emoji'

export default function getImageURL(data, id){
    return new URL("../assets/" + getEmoji(data, id.htmlCode)[0].name + ".png", import.meta.url)
}
