<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/a">Go to Component A</router-link>
    <router-link to="/b">Go to Component B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'two',
  data () {
    return {
      msg: 'Component Two'
    }
  }
}
</script>

<style lang="scss">

</style>
