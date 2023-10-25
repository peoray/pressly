<template>
  <h1>This is Press One Assessment</h1>

  <main>
    <ProjectTable :projects="data" :loading="loading" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import useFetch from './composables/useFetch'

import ProjectTable from './components/ProjectTable.vue'

const apiUrl = 'https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/?page=1'
const { data, loading, fetchData } = useFetch(apiUrl)

onMounted(() => {
  fetchData()
})
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
