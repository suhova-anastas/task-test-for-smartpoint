<template>
    <div class="users">
        <div class="users__container">
            <DataTable :value="users">
                <Column field="id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="email" header="Email" />
                <Column field="adress.street" header="Street" />
                <Column field="phone" header="Phone" />
                <Column field="company.name" header="Company" />
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios';

const users = ref([])

onMounted(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
})
</script>

<style src="./users-block.less" lang="less" />