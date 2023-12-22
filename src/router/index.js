import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Category from "@/views/Category.vue";
import Group from "@/views/Group.vue";
import Emoji from "@/views/Emoji.vue";
import SpecialFruits from "@/views/SpecialFruits.vue";

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/Category/:idCategory', component: Category, name: 'Category'},
    { path: '/Category/:idCategory/Group/:idGroup', component: Group, name: 'Group'},
    { path: '/Category/:idCategory/Group/:idGroup/Emoji/:htmlCode', component: Emoji, name: 'Emoji'},
    { path: '/SpecialFruits', component: SpecialFruits, name: 'SpecialFruits'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router