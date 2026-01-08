import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
 
   {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId', // เพิ่ม :userId เพื่อรับค่า
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId', // เพิ่ม :userId
      name: 'user',
      component: UserShow
    }
  ]
})

export default router