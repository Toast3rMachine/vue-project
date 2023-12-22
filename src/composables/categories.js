export default function getCategories(emojis) {
    let categories = []
    emojis.forEach(emoji => {
        if (!categories.includes(emoji.category)) {
            categories.push(emoji.category)
        }
    })
    categories = addIdToCategories(categories)
    return categories
}

function addIdToCategories(categories) {
    let categoriesWithId = []
    categories.forEach((category, index) => {
        categoriesWithId.push({id: index + 1, name: category})
    })
    return categoriesWithId
}