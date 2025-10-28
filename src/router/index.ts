import { createRouter, createWebHistory } from 'vue-router'
import UsersBlock from '@/components/users-block/users-block.vue'
import FavoritesBlock from '@/components/favorites-block/favorites-block.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UsersBlock,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesBlock,
    },
  ],
})

export default router
