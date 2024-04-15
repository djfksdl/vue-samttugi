import { createRouter, createWebHistory } from 'vue-router'
import ItemListView from '@/views/item/ItemListView.vue'
import ItemAccountView from '@/views/item/ItemAccountView.vue'
import MyPageOrder from '@/views/mypage/MyPageView.vue'
import LoginView from '@/views/user/LoginView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import LoginScsView from '@/views/user/LoginScsView.vue'
import ModifyFormView from '@/views/mypage/ModifyFormView.vue'

const routes = [
  {
    path: '/itemlist',
    name: 'ItemList',
    component: ItemListView
  },
  {
    path: '/itemaccount',
    name: 'ItemAccount',
    component: ItemAccountView
  },
  {
    path: '/mypage',
    name: 'MyPageOrder',
    component: MyPageOrder
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/loginform',
    name: 'LoginFormView',
    component: LoginFormView
  },
  {
    path: '/loginsuccess',
    name: 'LoginScsView',
    component: LoginScsView
  },
  {
    path: '/modify',
    name: 'ModifyFormView',
    component: ModifyFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
