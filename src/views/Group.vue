<script setup>
import { useRoute } from 'vue-router'
import useEmojis from '@/composables/emojisDB'
import useFruits from '@/composables/fruitsDB'
import getCategories from '@/composables/categories'
import getGroups from '@/composables/groups'
import getEmojis from '@/composables/emojis'
import emojisParser from '@/composables/emojisParser'

const route = useRoute()
const id = route.params
const { data } = useEmojis()

</script>

<template>
    <h1 class="bg-gradient-to-r from-indigo-950 to-blue-800 text-4xl text-center text-white font-semibold">
        Group {{ getGroups(data, getCategories(data)[id.idCategory - 1].name)[id.idGroup - 1].name }}
    </h1>
    <div class="font-sans text-center flex flex-wrap space-x-4 justify-center p-4" v-if="data">
        <button
            class="mt-4 overflow-auto transition ease-in-out bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:border-purple-800 hover:shadow-purple-800/50 duration-200 
        h-16 w-32 rounded-lg shadow-xl shadow-indigo-700/50 bg-gradient-to-r from-indigo-950 to-blue-800 hover:from-fuchsia-950 hover:to-purple-800"
            v-for="emoji in getEmojis(data, getCategories(data)[id.idCategory - 1].name, getGroups(data, getCategories(data)[id.idCategory - 1].name)[id.idGroup - 1].name)"
            :key="emoji.id">
            <router-link :to="{ name: 'Emoji', params: { htmlCode: emoji.htmlCode[0] } }">
                <p class="text-white font-semibold">{{ emoji.name }} {{ emojisParser(emoji.htmlCode) }}</p>
            </router-link>
        </button>
        <router-link :to="{ name: 'Category', params: { idCategory: id.idCategory } }">
            <button class="mt-4 transition ease-in-out bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:shadow-orange-700/50 duration-200 
        h-16 w-32 rounded-lg shadow-xl shadow-red-700/50 bg-gradient-to-r from-red-700 to-orange-700 text-white font-semibold">
                Retour
            </button>
        </router-link>
    </div>
    <p class="font-sans text-center flex space-x-4 justify-center" v-else>Chargement...</p>
</template>