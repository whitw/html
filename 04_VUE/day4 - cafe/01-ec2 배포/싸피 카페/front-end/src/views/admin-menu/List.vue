<template>
  <div class="list">
    <router-link to="/admin/menus/register">
      <b-button class="order-button w-100" variant="outline-dark"
        >메뉴 추가하기</b-button
      >
    </router-link>

    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <router-link :to="`/admin/menus/${menu.id}`">
          <b-button class="w-100 button" variant="outline-dark">
            <div class="menu-container">
              <div
                class="menu-image"
                :style="`background-image:url(${setImage(menu.image_src)})`"
              ></div>
              <div class="menu-info-wrapper">
                <h2 class="menu-name">{{ menu.name }}</h2>
                <p class="menu-description">{{ menu.description }}</p>
              </div>
            </div>
          </b-button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data() {
    return {
      menus: [],
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "메뉴 목록");
    const result = await api.menus.findAll();
    console.log(result);
    this.menus = result.data;
  },

  methods: {
    setImage(image_src) {
      return `http://3.35.11.114:8080/${image_src}`;
    },
  },
};
</script>



<style scoped>
.list {
  padding-left: 20px;
  padding-right: 20px;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
.order-button{
  margin-top:20px;
  margin-bottom:20px;
}

.button {
  margin-bottom: 20px;
}
.menu-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.menu-info-wrapper {
  margin: 0 auto;
  text-align: center;
}

.menu-name {
  font-size: 25px;
  font-weight: bold;
}

.menu-description {
  padding-top: 10px;
}
.menu-image {
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 180px;
  display: inline-block;
}
</style>


