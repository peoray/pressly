<template>
  <div class="info">
    <img src="@assets/pressone.png" alt="Press One logo" />
    <h1>This is Press One</h1>
    <p>
      PressOne gives you a business phone number to bring all your conversations together, so you
      can offer a great customer experience.
    </p>
  </div>

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

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
}

.info h1 {
  color: #28394b;
}
</style>
