<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <link rel="import" href="http://localhost:8080/login">
    <login></login>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
