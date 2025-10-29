import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types/user'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<User[]>([])

  const isEmpty = computed(() => favorites.value.length === 0)
  function addFavorite(user: User) {
    if (!favorites.value.find(u => u.id === user.id)) {
      favorites.value.push(user)
    }
  }

  function removeFavorite(id: number) {
    favorites.value = favorites.value.filter(u => u.id !== id)
  }

  const isFavorite = (id: number) => favorites.value.some(u => u.id === id)

  return { favorites, addFavorite, removeFavorite, isFavorite, isEmpty }
})
