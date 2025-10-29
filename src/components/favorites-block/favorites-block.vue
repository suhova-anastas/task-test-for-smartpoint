<template>
    <div class="favorites">
        <div class="favorites__container">
            <div v-if="!favoritesStore.isEmpty" class="favorites__list">
                <Card class="favorites__item" v-for="user in favoritesStore.favorites" :key="user.id">
                    <template #content>
                        <p>{{ user.name }}</p>
                        <p><b>Email:</b> {{ user.email }}</p>
                        <p><b>Phone:</b> {{ user.phone }}</p>
                        <p><b>Address:</b> {{ user.address.street }}</p>
                        <p><b>Company:</b> {{ user.company.name }}</p>
                        <p><b>Website:</b> {{ user.website }}</p>
                    </template>
                    <template #footer>
                        <Button @click="removeFavorite(user)" label="Удалить из избранного" icon="pi pi-trash" severity="danger" />
                    </template>
                </Card>
            </div>
            <div v-else class="favorites__empty">
                <div class="favorites__empty-icon pi pi-heart"></div>
                <div class="favorites__empty-text">Список избранных пуст</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import Card from 'primevue/card';
import Button from 'primevue/button';
import type { User } from '@/types/user';

const favoritesStore = useFavoritesStore()

const removeFavorite = (user: User) => {
    favoritesStore.removeFavorite(user.id)
}
</script>

<style src="./favorites-block.less" lang="less" />