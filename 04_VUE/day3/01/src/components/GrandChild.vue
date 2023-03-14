<template>
  <div>
    <h1>GrandChild</h1>
    <div>name : {{$store.state.name}} </div>
    <div>age : {{$store.state.age}} </div>
    <div>
    <input type="text" v-model="name">
    <button @click="changeName">이름 변경</button>
    </div>
    <div>
    <input type="number" v-model="age">
    <button @click="changeAge">나이 변경</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age : "",
    }
  },
  methods:{
    changeName(){
      this.$store.commit("SET_MY_NAME", this.name);
    },
    changeAge(){
      this.$store.commit("SET_MY_AGE", this.age);
    }
  }
}
</script>

<style>

</style>