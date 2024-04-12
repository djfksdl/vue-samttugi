import { createRouter, createWebHistory } from 'vue-router'
import ItemListView from '@/views/item/ItemListVue.vue'

const routes = [
  {
    path: '/itemlist',
    name: 'ItemList',
    component: ItemListView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
