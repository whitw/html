<template>
  <div>
    주문 디테일
    <div
      class="menu-image"
      :style="`background-image:url(${setImage(image_src)})`"
    ></div>
    <h1>{{ name }}</h1>
    <div class="description">{{description}}</div>
    <div>수량: {{quantity}}</div>
    <div>주문 요청: {{request_detail}}</div>
    
      <b-button @click="moveRegister" href="#" variant="primary"
        >수정하기</b-button
      >
      <b-button @click="deleteOrder" href="#" variant="danger">삭제</b-button>
      <b-button @click="moveOrder" href="#" variant="outline-primary"
        >목록</b-button
      >
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data() {
    return {
      image_src: "",
      quantity: "",
      request_detail: "",
      name: "",
      description: ""
    };
  },
  async created() {
    const result = await api.orders.findOne(this.$route.params.id);
    const data = result.data[0];

    this.image_src = data.image_src;
    this.quantity = data.quantity;
    this.name = data.name;
    this.request_detail = data.request_detail;
    this.description = data.description;
  },
  methods: {
    setImage(image_src) {
      return `http://3.35.11.114:8080/${image_src}`;
    },
    moveRegister(){
      this.$router.push(`/orders/register/${this.$route.params.id}`);
    },
    async deleteOrder() {
      const confirmResult = confirm("삭제하시겠습니까?");
      if (confirmResult) {
        const result = await api.orders.delete(this.$route.params.id);
        alert(result.data.message);
        this.$router.push("/orders");
      }
    },
    moveOrder() {
      this.$router.push("/orders");
    },
  },
};
</script>

<style scoped>
.description{
  color: gray;
}
</style>