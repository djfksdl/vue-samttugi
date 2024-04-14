import { createRouter, createWebHistory } from 'vue-router'
import ItemListView from '@/views/item/ItemListView.vue'
import itemAccountView from '@/views/item/ItemAccountView.vue'

const routes = [
  {
    path: '/itemlist',
    name: 'ItemList',
    component: ItemListView
  },
  {
    path: '/itemaccount',
    name: 'itemAccount',
    component: itemAccountView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
