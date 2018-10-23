<template>
  <div>
    <h1>{{ msg }} {{ employee.employeeNumber }}</h1>
    <p>{{ $route.params.id }}</p>
    <p>First Name: <input v-model="employee.firstName"></p>
    <p>Last Name: <input v-model="employee.lastName"></p>
    <p>Email: <input v-model="employee.email"></p>
    <p>Job Title: <input v-model="employee.jobTitle"></p>
    <p>Office Code: <input v-model="employee.officeCode"></p>
    <p>Reports To: <input v-model="employee.reportsTo"></p>
    <p>Extension: <input v-model="employee.extension"></p>

    <button @click="$emit('updateEmpployee', employee)">Save</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'one',
  data () {
    return {
      msg: 'Employee',
      employee: {}
    }
  },
  methods: {
    updateEmployee: function (employee) {
      axios.patch('http://127.0.0.1:3000/update-employee', employee)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  created () {
    console.log(this.$route.params.id);
    // axios.get('http://127.0.0.1:3000/employees/' + this.$route.params.id)
    //   .then((results) => {
    //     this.employee = results.data[0]
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }
}
</script>

<style lang="scss">

</style>
