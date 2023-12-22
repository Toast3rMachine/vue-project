//Récupération des emojis du groupe
export default function getEmojis(emojis, category, group) {
    let emojisFiltered = []
    emojis.forEach(emoji => {
        if (emoji.category === category && emoji.group === group) {
            emojisFiltered.push(emoji)
        }
    })
    return emojisFiltered
}