<script setup>

</script>

<template>
    <h1 class="bg-gradient-to-r from-indigo-950 to-blue-800 text-4xl text-center text-white font-semibold">
        Special Fruits
    </h1>
    <div class="mt-4 flex flex-wrap space-x-4 justify-center">
        <img class="m-auto" height="250px" width="250px" src="../assets/banana.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/cherries.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/lemon.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/pear.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/pineapple.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/raspberry.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/red apple.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/strawberry.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/tangerine.png">
        <img class="m-auto" height="250px" width="250px" src="../assets/watermelon.png">
    </div>
    <router-link :to="{ name: 'Home' }">
        <button
            class="ml-16 transition ease-in-out bg-indigo-950 hover:-translate-y-1 hover:scale-110 hover:shadow-orange-700/50 duration-200 
        h-16 w-32 rounded-lg shadow-xl shadow-red-700/50 bg-gradient-to-r from-red-700 to-orange-700 text-white font-semibold">
            Retour
        </button>
    </router-link>
</template>