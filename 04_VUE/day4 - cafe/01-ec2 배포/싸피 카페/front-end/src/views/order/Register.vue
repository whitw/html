<template>
  <div class="order-register">
    <div class="container">
      <div class="text-container">
        주문할 메뉴:
      </div>
      <div class="input-container">
        <b-form-input
          v-model="selectedMenuName"
          placeholder="메뉴를 선택해 주세요."
          readonly
        ></b-form-input>
        <b-dropdown id="select-menu" text="메뉴 선택" class="m-md-2">
          <b-dropdown-item
            v-for="menu in menus"
            :key="menu.id"
            @click="selectMenu(menu)"
          >
            {{ menu.name }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="menu-display" v-if="selectedMenuName"></div>
    <div class="container">
      <div class="text-container">주문할 수량:</div>
      <div class="input-container">
        <b-form-input v-model="quantity" type="number"></b-form-input>
      </div>
    </div>
    <div class="menu-display" v-if="selectedMenuName"></div>
    <div class="container">
      <div class="text-container">주문 요청:</div>
      <div class="input-container">
        <b-form-input v-model="order_detail"></b-form-input>
      </div>
    </div>
    <div class="container">
      <b-button variant="primary" @click="order()">주문하기</b-button>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data() {
    return {
      menus: [],
      selectedMenuName: "",
      selectedMenuId: 0,
      quantity: 0,
      order_detail: ""
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "주문하기");
    const result = await api.menus.findAll();
    console.log(result.data);
    this.menus = result.data;
  },

  methods: {
    setImage(image_src) {
      return `http://3.35.11.114:8080/${image_src}`;
    },
    moveDetail(id) {
      this.$router.push(`/orders/${id}`);
    },
    selectMenu(menu) {
      this.selectedMenuName = menu.name;
      this.selectedMenuId = menu.id;
    },
    async order(){
      if (!this.selectedMenuName || this.quantity <= 0 || !this.order_detail) {
        alert("빈 값이 있습니다 내용을 전부 작성해주세요");
        return;
      }
      const result = await api.orders.create(
        this.selectedMenuId,
        this.quantity,
        this.order_detail
      );
      console.log(result);
      // 요청 성공
      if (result.data.success) {
        alert(result.data.message);
        this.$router.push("/orders");
      }
      // 요청 실패
      if (!result.data.success) {
        alert(result.data.message);
      }
      this.$router.push(`/orders`);
    }
  },
};
</script>

<style scoped>
.text-container {
  width: 150px;
}
.order-register {
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
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
.order-button {
  margin-top: 20px;
  margin-bottom: 20px;
}

.button {
  margin-bottom: 20px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 20px;
  width: 100vw;
  margin-left: 50px;
  margin-right: 50px;
}

.input-container{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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