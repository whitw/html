<template>
  <div>
    <h1>home</h1>
    <div>
      <router-link to="/board/1">1으로 가자</router-link>
    </div>
    <div>
      <router-link to="/board/2">2으로 가자</router-link>
    </div>
    <div>
      <router-link to="/board/3">3으로 가자</router-link>
    </div>
    <div>
      <button @click="go789">GO 789</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    go789() {
      console.log("hey");
      //이동해야 함. router를 써야 한다.
      this.$router.push("/board/789");
      // + this.$router.push("/board/123");
      //리다이렉팅도 되는건가봄
    }
  }
}
</script>

<style>
  button{
    margin-top: 10px;
    background-color:linear-gradient(black, white);
    border:2px solid black;
    border-radius: 7px;
    
  }
</style>