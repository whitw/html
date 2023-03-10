<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/board">Board</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f1a29;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0f1a29;
}

nav a.router-link-exact-active {
  color: #4276b9;
}
</style>
