<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Developer</th>
          <th>Main Contractor</th>
          <th>Area</th>
          <th>State</th>
          <th>Status <span> &#x25BC;</span></th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <!-- Show a loading message or spinner when loading is true -->
          <td class="loading" colspan="14">Loading...</td>
        </tr>
        <tr v-if="!projects?.length && !loading">
          <td class="empty" colspan="7">No projects found.</td>
        </tr>

        <template v-if="projects?.length && !loading">
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.project_name }}</td>
            <td>{{ project.developer }}</td>
            <td>{{ project.main_contractor }}</td>
            <td>{{ project.region }}</td>
            <td>{{ project.state }}</td>
            <!-- <td>{{ project.status }}</td> -->
            <td>
              <span class="badge" :style="getBadgeStyle(project.status)">
                {{ project.status || '-' }}
              </span>
            </td>
            <td>{{ project.sector }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

const getBadgeStyle = (status) => {
  if (!status && status === 'completed') {
    return {
      backgroundColor: '#3BD811' // Green color for "completed"'
    }
  } else {
    return {
      backgroundColor: getRandomColor() // Random color for other statuses
    }
  }
}

const getRandomColor = () => {
  // Generate a random color as a hexadecimal value
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
</script>

<style scoped>
.badge {
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
}

section {
  /* width: calc(100vw - 350px); */
  max-width: 100%;
  /* height: 1000px; */
  margin: 20px 6px;

  overflow: scroll;
  box-shadow: 0.1px 0.1px 0.1px 0.5px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

thead {
  text-align-last: left;
}

th {
  padding: 20px;
  min-width: 150px;

  position: sticky;
  top: 0;
  background-color: #28394b;
  color: white;

  z-index: 1;
}

tbody tr:nth-child(odd) {
  background-color: #f6fafd;
}

tbody tr:nth-child(even) {
  background-color: #fff;
}

td {
  padding: 20px;
  min-width: 150px;
  z-index: 1;

  color: #81898f;
}

th span {
  font-size: 10px;
  color: #fff;
  padding-left: 10px;
  vertical-align: middle;
}

@media only screen and (min-width: 800px) {
  section {
    margin: 25px auto;
  }

  th:nth-child(1),
  td:nth-child(1) {
    position: sticky;
    left: 0;
    z-index: 999;

    min-width: 250px;
  }

  th:nth-child(1) {
    z-index: 9999;
  }

  td:nth-child(1) {
    background-color: inherit;
    box-shadow: 2px 1px 5px -2px #ccc;
    font-weight: bold;

    color: #555a62;
  }
}
@media only screen and (min-width: 1024px) {
  section {
    width: calc(100vw - 150px);
    /* height: calc(100vw - 350px); */
    height: auto;
  }
}

.loading,
.empty {
  text-align: center;
  margin: 100px;
  height: 100px;
  color: #28394b !important;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.loading {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
