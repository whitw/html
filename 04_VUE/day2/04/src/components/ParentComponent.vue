<template>
  <div>
    <h1>Parent</h1>
    <button @click="changeHalbaeData">click to change halbae</button>
    <div>{{ halbaeData }}</div>
    <div>{{ halbaeData2 }}</div>

    <ChildComponent
      :halbaeData="halbaeData"
      @changeHalbaeData="changeHalbaeDataFromChild"
    />
    <!--
      자식은 emit에서 changeHalbaeData를 호출할 수 있다.
      그 때 실행되는 함수 이름은 changeHalbaeDataFromChild
     -->
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  methods: {
    changeHalbaeData() {
      //  this.halbaeData = "lalala" //직접 변경은 허용되지 않는다.
      this.$emit("changeHalbaeData", "왕위를 계승중입니다.");
      //homeView에 있는 changeHalbaeData를 실행.
      //changeHalbaeData("왕위를 계승중입니다");
    },
    changeHalbaeDataFromChild(text){
      this.$emit("changeHalbaeData", text);
    }
  },
  props: ["halbaeData", "halbaeData2"],
};
</script>

<style>
</style>