<template>
  <div class="list">
    <h1>주문 리스트</h1>
    <router-link to="/orders/register">
      <b-button class="order-button w-100 add-menu" variant="outline-dark">
        메뉴 추가하기
        </b-button>
    </router-link>
    <ul>
      <li v-for="order in orders" :key="order.id">
        <b-button class="item w-100" variant="outline-dark">
          <div
            class="menu-image"
            :style="`background-image:url(${setImage(order.image_src)})`"
          ></div>
          <div>
            <h1>
              <router-link :to="`/orders/${order.id}`">{{
                order.name
              }}</router-link>
            </h1>
            <div class="description">
              {{ order.description }}
            </div>
            <div class="detail">
              {{ order.request_detail }}
            </div>
          </div>
        </b-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "주문 목록");
    const result = await api.orders.findAll();
    console.log(result.data);
    this.orders = result.data;
  },
  methods: {
    setImage(image_src) {
      return `http://3.35.11.114:8080/${image_src}`;
    },
  },
};
</script>

<style scoped>
.list{
  padding-left:20px;
  padding-right: 20px;
}
ul{
  padding-left:0;
}
li {
  list-style: none;
}
.add-menu{
  display: block;
  margin:0;
  margin-bottom: 20px;
}
.item {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
}
.menu-image {
  margin-right: 20px;
}
.description {
  color: gray;
  font-weight: 100;
}
.detail {
  font-weight: bold;
}
</style>