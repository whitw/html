<template>
  <div>
    <h1>board</h1>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$router);  //vue-router 프로그램. 어디서나 동일.
    //$는 별 의미는 없음. jQuery시절의 유산.
    console.log(this.$route); //각 페이지의 경로
  }
}
</script>

<style>

</style>