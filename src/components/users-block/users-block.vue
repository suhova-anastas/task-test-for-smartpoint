<template>
    <div class="users">
        <div class="users__container">
            <DataTable :value="users" paginator :rows="10">
                <Column field="id" sortable header="ID" />
                <Column field="name" sortable header="Name" />
                <Column field="email" sortable header="Email" />
                <Column field="address.street" sortable header="Street" />
                <Column field="phone" sortable header="Phone" />
                <Column field="company.name" sortable header="Company" />
                <Column>
                    <template #body="slotProps">
                        <Button label="В избранное"
                        :icon="favoritesStore.isFavorite(slotProps.data.id) ? 'pi pi-heart-fill' : 'pi pi-heart'"
                        :severity="favoritesStore.isFavorite(slotProps.data.id) ? 'success' : 'contrast'"
                        @click="toggleFavorite(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import axios from 'axios';
import { useFavoritesStore } from '@/stores/favorites'
import type { User } from '@/types/user';

const users = ref<User[]>([])
const favoritesStore = useFavoritesStore()

onMounted(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
})

const toggleFavorite = (user: User) => {
  if (favoritesStore.isFavorite(user.id)) {
    favoritesStore.removeFavorite(user.id)
  } else {
    favoritesStore.addFavorite(user)
  }
}
</script>

<style src="./users-block.less" lang="less" />