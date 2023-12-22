<script setup>
import { useRoute } from 'vue-router'
import useEmojis from '@/composables/emojisDB'
import useFruits from '@/composables/fruitsDB'
import emojisParser from '@/composables/emojisParser'
import getEmoji from '@/composables/emoji'
import getImageURL from '@/composables/imageURL'

const route = useRoute()
const id = route.params
const { data } = useEmojis()
const specialFruits = ["red apple", "banana", "cherries", "lemon", "tangerine", "pear", "pineapple", "strawberry" ,"watermelon"]
</script>

<template>
    <h1 class="bg-gradient-to-r from-indigo-950 to-blue-800 text-4xl text-center text-white font-semibold">
        Emoji : {{ getEmoji(data, id.htmlCode)[0].name }} {{ emojisParser(id.htmlCode) }}
    </h1>
    <div class="font-sans flex flex-wrap space-x-4 justify-center p-4" v-if="data">
        <div class="p-2 bg-gradient-to-r from-indigo-950 to-blue-800 rounded-lg text-white font-sans font-semibold text-center mb-40">
            Group : {{ getEmoji(data, id.htmlCode)[0].group }} <br>
            Category : {{ getEmoji(data, id.htmlCode)[0].category }} <br>
            HTML Code : {{ getEmoji(data, id.htmlCode)[0].htmlCode[0] }} <br>
            Unicode : {{ getEmoji(data, id.htmlCode)[0].unicode[0] }}
        </div>
        <div class="p-2 border-4 border-indigo-950 rounded-lg shadow-xl shadow-indigo-700/50 font-semibold"
            v-if="getEmoji(data, id.htmlCode)[0].group == 'food fruit'">
            Informations on {{ getEmoji(data, id.htmlCode)[0].name }} : <br>
            Family : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].family }} <br>
            Order : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].order }} <br>
            Genus : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].genus }} <br>
            Nutritions :
            <ul class="ml-8">
                <li>Calories : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].nutritions.calories }}</li>
                <li>Fat : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].nutritions.fat }}</li>
                <li>Sugar : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].nutritions.sugar }}</li>
                <li>Carbohydrates : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].nutritions.carbohydrates }}</li>
                <li>Protein : {{ useFruits(getEmoji(data, id.htmlCode)[0].name)[0].nutritions.protein }}</li>
            </ul>
        </div>
        <router-link :to="{ name: 'Group', params: { idGroup: id.idGroup } }">
            <button class="mt-4 transition ease-in-out bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:shadow-orange-700/50 duration-200 
        h-16 w-32 rounded-lg shadow-xl shadow-red-700/50 bg-gradient-to-r from-red-700 to-orange-700 text-white font-semibold">
                Retour
            </button>
        </router-link>
    </div>
    <p class="font-sans text-center flex space-x-4 justify-center" v-else>Chargement...</p>
    <div v-if="specialFruits.includes(getEmoji(data, id.htmlCode)[0].name)">
        <img class="m-auto" height="250px" width="250px" :src="getImageURL(data, id)">
    </div>
</template>