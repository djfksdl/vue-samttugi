import { createRouter, createWebHistory } from 'vue-router'
import ItemListView from '@/views/item/ItemListView.vue'
import ItemAccountView from '@/views/item/ItemAccountView.vue'
import MyPageOrder from '@/views/mypage/MyPageView.vue'
import LoginView from '@/views/user/LoginView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import LoginScsView from '@/views/user/LoginScsView.vue'
import ModifyFormView from '@/views/mypage/ModifyFormView.vue'
import OrderView from '@/views/order/OrderView.vue'
import OrderSuccessView from '@/views/order/OrderSuccessView.vue'
import CartView from '@/views/cart/CartView.vue'
import MainView from '@/views/main/MainView.vue'
import ManagerMainView from '@/views/manager/ManagerMainView.vue'
import ManagerInsertView from '@/views/manager/ManagerInsertView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },{
    path: '/manager',
    name: 'ManagerMainView',
    component: ManagerMainView
  },{
    path: '/insertform',
    name: 'ManagerInsertView',
    component: ManagerInsertView
  },
  {
    path: '/itemlist/:no',
    name: 'ItemList',
    component: ItemListView
  },
  {
    path: '/itemaccount/:no',
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
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/order',
    name: 'OrderView',
    component: OrderView
  },
  {
    path: '/order/success',
    name: 'OrderSuccessView',
    component: OrderSuccessView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
