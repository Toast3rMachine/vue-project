<script setup>
import useEmojis from '@/composables/emojisDB'
import getCategories from '@/composables/categories'

const {data} = useEmojis()
</script>

<template>
    <h1 class="bg-gradient-to-r from-indigo-950 to-blue-800 text-4xl text-center text-white font-semibold">Home</h1>
    <div class="font-sans text-center flex space-x-4 justify-center p-4 " v-if="data" > <!-- v-if="data" permet de ne pas avoir d'erreur dans la console -->
        <button 
        class="transition ease-in-out bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:border-purple-800 hover:shadow-purple-800/50 duration-200 
        h-16 w-32 rounded-lg shadow-xl shadow-indigo-700/50 bg-gradient-to-r from-indigo-950 to-blue-800 hover:from-fuchsia-950 hover:to-purple-800" 
        v-for="category in getCategories(data)" :key="category.id"
        >
            <router-link :to="{name: 'Category', params: {idCategory: category.id}}"> 
                <p class="text-white font-semibold">{{ category.name }}</p>
            </router-link>
        </button>
    </div>
    <p class="font-sans text-center flex space-x-4 justify-center" v-else>Chargement...</p>
</template>

