import Vue from 'vue'
import vueRouter from 'vue-router'

const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const shopCart = () => import('../views/shopCart/ShopCart')
const profile = () => import('../views/profile/Profile')

Vue.use(vueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/shopCart',
    component:shopCart
  },
  {
    path:'/profile',
    component:profile
  }
]

const router = new vueRouter({
  routes,
  mode:'history'
})


export default router
