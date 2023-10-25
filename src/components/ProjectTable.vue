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
        <tr v-for="(project, index) in projects" :key="project.id">
          <td>{{ project.project_name }}</td>
          <td>{{ project.developer }}</td>
          <td>{{ project.main_contractor }}</td>
          <td>{{ project.region }}</td>
          <td>{{ project.state }}</td>
          <td>{{ project.status }}</td>
          <td>{{ project.sector }}</td>
        </tr>
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
</script>

<style scoped>
section {
  /* width: calc(100vw - 350px); */
  max-width: 100%;
  height: 1000px;
  margin: 100px 6px;

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
    margin: 0 auto;
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
@media only screen and (min-width: 960px) {
  section {
    width: calc(100vw - 150px);
    /* height: calc(100vw - 350px); */
    height: auto;
  }
}
</style>
