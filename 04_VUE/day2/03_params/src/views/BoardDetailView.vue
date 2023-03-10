<template>
  <div>
    <h1>Detail of {{id}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
    }
  },
  created(){
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>