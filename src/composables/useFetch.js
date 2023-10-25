import { ref, watchEffect } from 'vue'

/**
 * A composable for fetching data from an API.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} - An object with reactive properties for data, loading, error, and a fetchData function.
 */

const useFetch = (url) => {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Fetch data from the specified URL and update reactive properties accordingly.
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
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  // Automatically trigger the fetchData function when this composable is used.
  watchEffect(() => {
    fetchData()
  })

  /**
   * @returns {Object} - An object containing the reactive properties and the fetchData function.
   * @property {ref} data - A reference to the fetched data.
   * @property {ref} loading - A reference to the loading state.
   * @property {ref} error - A reference to any error that occurred during the fetch.
   * @property {function} fetchData - A function to manually trigger data fetching.
   */
  return {
    data,
    loading,
    error,
    fetchData
  }
}

export default useFetch
