<template>
  <HeaderBlock />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBlock from './components/header-block/header-block.vue';
</script>

<style src="./app.less" lang="less" />