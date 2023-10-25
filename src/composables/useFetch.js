import { ref, watchEffect } from 'vue'

const useFetch = (url) => {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const res = await response.json()

      data.value = res.data

      console.log(data)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return {
    data,
    loading,
    error,
    fetchData
  }
}

export default useFetch
