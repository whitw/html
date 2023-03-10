<template>
  <div>
    <h1>child</h1>
    <button @click="changeHalbaeData">할배 데이터 바꾸기</button>
    <div>{{halbaeData}}</div>
  </div>
</template>

<script>
export default {
  props:["halbaeData"],
  methods:{
    changeHalbaeData(){
      this.$emit("changeHalbaeData", "랄랄라");
    }
  }
}
</script>

<style>

</style>