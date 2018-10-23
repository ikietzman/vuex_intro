<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{msgFromState}}</h2>
    <button @click="addExclamation('!')">Add !</button>
    <button @click="addExclamation('?')">Add ?</button>
    <!-- <router-link to="/one">Go to Component One</router-link>
    <router-link to="/two">Go to Component Two</router-link>
    <router-link to="/three">Go to Component Three</router-link> -->
    <employees class="one_of_2"></employees>
    <employees class="one_of_2"></employees>
    <!-- <router-link :to="{path: '/employees'}">Go to Employees</router-link> -->

    <!-- <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import Employees from './components/Employees.vue'
import EmployeesTwo from './components/EmployeesTwo.vue'

export default {
  name: 'app',
  components: {
    employees: Employees,
    employeesTwo: EmployeesTwo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    msgFromState: function() {
      return this.$store.getters.messageGetter;
    }
  },
  methods: {
    addExclamation: function(payload) {
      this.$store.dispatch('updateMessage', payload);
    }
  },
  created () {
    this.$store.dispatch('getEmployees');
  }
}
</script>

<style lang="scss">

button{
  display:block;
  margin:0 auto;
  width:100px;
}

.one_of_2 {
  display:inline-block;
  width:45%;
  vertical-align:top;
}

.fade-enter-active {
  position:relative;
  transition: opacity 1s, left 1s;
  left:0;
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  position:relative;
  transition: opacity 1s, left 1s;
  opacity: 0;
  left:100%;
}

 .fade-leave-active {
   position:relative;
   left:0;
   transition: opacity 1s, left 1s;
 }

 .fade-leave-to {
   left:-100%;
  opacity: 0;
 }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width:100%;
  overflow-x: hidden;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
