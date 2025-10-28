<template>
    <div class="header">
        <div class="header__container">
            <div class="header__navigation">
                <RouterLink to="/users" class="header__navigation_item">
                    <div class="header__navigation_item-icon pi pi-clipboard"></div>
                    <p class="header__navigation_item-text">Пользователи</p>
                </RouterLink>
                <RouterLink to="/favorites" class="header__navigation_item">
                    <div class="header__navigation_item-icon pi pi-heart"></div>
                    <p class="header__navigation_item-text">Избранное</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import 'primeicons/primeicons.css'
</script>

<style src="./header-block.less" lang="less" />