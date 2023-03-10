<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppTest></AppTest>
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <!-- <router-view/> -->
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
//컴포넌트를 사용할 때
//1. 가져온다 (import from)
//2. 가져온 컴포넌트를 사용할 수 있게
//components:{}에 등록한다.
//여기서 data(), methods:{}, computed:{} 등도 쓸 수 있는듯.
//template에서 사용한다.
import AppHeader from "./components/AppHeader.vue";
import AppTest from "./components/AppTest.vue";
export default {
  components:{
    AppHeader,
    AppTest
  }
}
</script>