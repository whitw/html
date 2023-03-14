<template>
  <div>
    <h1>AppChild</h1>
    <div>name : {{$store.state.name}} </div>
    <div>age : {{$store.state.age}} </div>
    <GrandChild />
  </div>
  
</template>

<script>
import GrandChild from "@/components/GrandChild.vue"
export default {
  components:{
    GrandChild
  }
}
</script>

<style>

</style>