//Récupération des groupes d'emojis en parcourant la catégorie
export default function getGroups(emojis, category) {
    let groups = []
    emojis.forEach(emoji => {
        if (emoji.category === category) {
            if (!groups.includes(emoji.group)) {
                groups.push(emoji.group)
            }
        }
    })
    groups = addIdToGroups(groups)
    return groups
}

//function add id to groups arrays
function addIdToGroups(groups) {
    let groupsWithId = []
    groups.forEach((group, index) => {
        groupsWithId.push({id: index + 1, name: group})
    })
    return groupsWithId
}