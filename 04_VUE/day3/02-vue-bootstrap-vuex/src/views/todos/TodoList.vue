<template>
  <div>
    <div v-if="$store.state.loading">
      <b-spinner v-if="$store.state.loading" label="Spinning"></b-spinner>
      <div>로딩 중에 뜨는 화면은 여기에 구현한다.</div>
    </div>
    <div v-else>
      <h1>ListView</h1>
      <div v-for="list in lists" :key="list.id">
        {{ list.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api";
export default {
  data() {
    return {
      lists: [],
    };
  },
  async created() {
    this.$store.commit("SET_LOADING", true);
    const result = await api.jsonplaceholder.findAll();
    this.lists = result.data;
    this.$store.commit("SET_LOADING", false);
  },
};
</script>

<style>
</style>