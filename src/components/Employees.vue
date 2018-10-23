<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ msgFromState }}</h2>
    <!-- Create markup that repeats for each employee and includes a router link to each employee -->
    <div v-for="employee in employees">
      <router-link :to="{path: '/employee/' + employee.employeeNumber}">{{employee.firstName}} {{employee.lastName}}</router-link>

    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'one',
  data () {
    return {
      msg: 'Employees'
    }
  },
  computed: {
    msgFromState: function() {
      return this.$store.getters.messageGetter;
    },
    employees: function() {
      return this.$store.getters.getEmployees;
    }
  },
  created () {
    // axios.get('http://127.0.0.1:3000/all/')
    //   .then((results) => {
    //     this.employees = results.data
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

}
</script>

<style lang="scss">

</style>
