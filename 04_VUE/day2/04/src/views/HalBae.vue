<template>
  <div>
    <h1>GrandParent</h1>
    {{ halbaeData }}
    <ParentComponent
      :halbaeData="halbaeData"
      :halbaeData2="halbaeData2"
      @changeHalbaeData="changeHalbaeData"
    />
  </div>
</template>

<script>
import ParentComponent from "../components/ParentComponent.vue";
export default {
  components: {
    ParentComponent,
  },
  data() {
    return {
      halbaeData: "나는 할배 데이터!",
      halbaeData2: "나는 두번째 할배",
    };
  },
  methods: {
    changeHalbaeData(text) {
      this.halbaeData = text;
    },
  },
};
</script>

<style>
</style>