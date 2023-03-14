<template>
  <div id="app">
    <h1>App</h1>
    <div>name : {{$store.state.name}} </div>
    <div>age : {{$store.state.age}} </div>

    <AppChild />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import AppChild from "@/components/AppChild.vue"
export default {
  components:{
    AppChild
  }
}
</script>