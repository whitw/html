<template>
  <div id="home">
    <h1 class="title">Home</h1>
    <div v-if="menus.length === 0">
      <div class="loading">
        <b-spinner style="width: 3rem; height: 3rem"></b-spinner>
        <h2>로딩중...</h2>
      </div>
    </div>
    
    
    <div v-else>
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <div @click="goDetail(menu.id)" class="menu-name">
            <h2>{{ menu.name }}</h2>
          </div>
          <div>{{ menu.description }}</div>
          <hr />
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      menus: [],
      loaded: false,
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8080/api/menus");
      this.menus = response.data;
      this.loaded = true;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  }
};
</script>

<style>
.title {
  text-align: center;
}

.loading {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-weight: bolder;
}

ul {
  list-style: none;
}
.menu-name{
  color:blue;
  text-decoration:underline;
}
.menu-name:hover{
  color:red;
  cursor:pointer;
}

.bottom{
  display:flex;
  justify-content: center;
}
</style>