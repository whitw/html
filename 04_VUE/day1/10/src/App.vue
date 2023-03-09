<template>
<!-- 하나의 컴포넌트는 하나의 root를 가져야 함. 무지성 div 쓰면 된다 -->
  <div>
    <h1>Parent</h1>
    <AppChild />
  </div>
</template>

<script>
  //컴포넌트 이름은 App을 제외하곤 두개의 명사의 조합이어야 한다.
  //가장 연관성이 높은 컴포넌트와 연관지어 짓자.
import AppChild from "./components/AppChild.vue"
export default {
  components: {
    AppChild
  }
}
</script>

<style>

</style>