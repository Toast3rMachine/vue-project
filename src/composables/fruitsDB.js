export default function useFruits(name="") {
    let fruits = [
        {
            "name": "banana",
            "id": 1,
            "family": "Musaceae",
            "order": "Zingiberales",
            "genus": "Musa",
            "nutritions": {
                "calories": 96,
                "fat": 0.2,
                "sugar": 17.2,
                "carbohydrates": 22,
                "protein": 1
            }
        },
        {
            "name": "strawberry",
            "id": 3,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Fragaria",
            "nutritions": {
                "calories": 29,
                "fat": 0.4,
                "sugar": 5.4,
                "carbohydrates": 5.5,
                "protein": 0.8
            }
        },
        {
            "name": "pear",
            "id": 4,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Pyrus",
            "nutritions": {
                "calories": 57,
                "fat": 0.1,
                "sugar": 10,
                "carbohydrates": 15,
                "protein": 0.4
            }
        },
        {
            "name": "tomato",
            "id": 5,
            "family": "Solanaceae",
            "order": "Solanales",
            "genus": "Solanum",
            "nutritions": {
                "calories": 74,
                "fat": 0.2,
                "sugar": 2.6,
                "carbohydrates": 3.9,
                "protein": 0.9
            }
        },
        {
            "name": "red apple",
            "id": 6,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Malus",
            "nutritions": {
                "calories": 52,
                "fat": 0.4,
                "sugar": 10.3,
                "carbohydrates": 11.4,
                "protein": 0.3
            }
        },
        {
            "name": "cherries",
            "id": 9,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Prunus",
            "nutritions": {
                "calories": 50,
                "fat": 0.3,
                "sugar": 8,
                "carbohydrates": 12,
                "protein": 1
            }
        },
        {
            "name": "pineapple",
            "id": 10,
            "family": "Bromeliaceae",
            "order": "Poales",
            "genus": "Ananas",
            "nutritions": {
                "calories": 50,
                "fat": 0.12,
                "sugar": 9.85,
                "carbohydrates": 13.12,
                "protein": 0.54
            }
        },
        {
            "name": "watermelon",
            "id": 25,
            "family": "Cucurbitaceae",
            "order": "Cucurbitales",
            "genus": "Citrullus",
            "nutritions": {
                "calories": 30,
                "fat": 0.2,
                "sugar": 6,
                "carbohydrates": 8,
                "protein": 0.6
            }
        },
        {
            "name": "lemon",
            "id": 26,
            "family": "Rutaceae",
            "order": "Sapindales",
            "genus": "Citrus",
            "nutritions": {
                "calories": 29,
                "fat": 0.3,
                "sugar": 2.5,
                "carbohydrates": 9,
                "protein": 1.1
            }
        },
        {
            "name": "melon",
            "id": 41,
            "family": "Cucurbitaceae",
            "order": "Cucurbitaceae",
            "genus": "Cucumis",
            "nutritions": {
                "calories": 34,
                "fat": 0,
                "sugar": 8,
                "carbohydrates": 8,
                "protein": 0
            }
        },
        {
            "name": "green apple",
            "id": 72,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Malus",
            "nutritions": {
                "calories": 21,
                "fat": 0.1,
                "sugar": 6.4,
                "carbohydrates": 3.1,
                "protein": 0.4
            }
        },
        {
            "name": "tangerine",
            "id": 77,
            "family": "Rutaceae",
            "order": "Sapindales",
            "genus": "Citrus",
            "nutritions": {
                "calories": 45,
                "fat": 0.4,
                "sugar": 9.1,
                "carbohydrates": 8.3,
                "protein": 0
            }
        },
        {
            "name": "grapes",
            "id": 81,
            "family": "Vitaceae",
            "order": "Vitales",
            "genus": "Vitis",
            "nutritions": {
                "calories": 69,
                "fat": 0.16,
                "sugar": 16,
                "carbohydrates": 18.1,
                "protein": 0.72
            }
        },
        {
            "name": "kiwifruit",
            "id": 85,
            "family": "Actinidiaceae",
            "order": "Ericales",
            "genus": "Actinidia",
            "nutritions": {
                "calories": 61,
                "fat": 0.5,
                "sugar": 8.9,
                "carbohydrates": 14.6,
                "protein": 1.14
            }
        },
        {
            "name": "peach",
            "id": 86,
            "family": "Rosaceae",
            "order": "Rosales",
            "genus": "Prunus",
            "nutritions": {
                "calories": 39,
                "fat": 0.25,
                "sugar": 8.4,
                "carbohydrates": 9.5,
                "protein": 0.9
            }
        },
    ]
    
    if (name) {
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name === name.toLowerCase()) {
                fruits = [fruits[i]]
                break
            }
        }
    }
    return fruits
}