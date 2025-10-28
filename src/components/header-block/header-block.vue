<template>
    <div class="header">
        <RouterLink to="/users">Users</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style src="./header-block.less" lang="less" />